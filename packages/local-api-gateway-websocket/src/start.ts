/* eslint-disable no-param-reassign */
import WebSocket from 'ws';
import { v4 } from 'uuid';
import AWS from 'aws-sdk';
import { InvocationResponse } from 'aws-sdk/clients/lambda';
import waitForLambdas from './wait-for-lambdas';

const onMessageLambdaName = process.env.ON_MESSAGE_LAMBDA_NAME || 'actions';
const onCloseLambdaName = process.env.ON_CLOSE_LAMBDA_NAME || 'websocketDisconnection';

interface WebSocketExtension extends WebSocket {
    isAlive: boolean;
    connectionId: string;
}
interface WebSocketServerExtension extends WebSocket.Server {
    clients: Set<WebSocketExtension>;
}

const NOOP = () => undefined;
const lambda = new AWS.Lambda({
    endpoint: process.env.LAMBDA_ENDPOINT || 'http://localstack:4574',
    region: 'us-east-1'
});
const wss = new WebSocket.Server({ port: 7676 }) as WebSocketServerExtension;

function heartbeat(this: any) {
    this.isAlive = true;
}
async function invokeLambda(name: string, payload: string): Promise<InvocationResponse> {
    return new Promise<InvocationResponse>((resolve, reject) => {
        lambda.invoke({ FunctionName: name, Payload: payload }, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}

function getPayload(connectionId: string, body?: object): string {
    return JSON.stringify({
        headers: { connectionId },
        body: JSON.stringify(body)
    });
}

async function buildConnection() {
    await waitForLambdas(lambda, [onMessageLambdaName, onCloseLambdaName]);

    console.log('starting websocket');
    wss.on('connection', (ws: WebSocketExtension) => {
        ws.isAlive = true;
        ws.connectionId = v4();

        ws.on('pong', heartbeat);
        ws.on('message', async (message: string) => {
            await invokeLambda(onMessageLambdaName, getPayload(ws.connectionId, JSON.parse(message)));
        });
        ws.on('close', async () => {
            await invokeLambda(onCloseLambdaName, getPayload(ws.connectionId));
        });
    });

    setInterval(() => {
        wss.clients.forEach((ws: WebSocketExtension) => {
            if (ws.isAlive) {
                ws.isAlive = false;
                ws.ping(NOOP);
            } else {
                ws.terminate();
            }
        });
    }, 30000);
}

buildConnection();
