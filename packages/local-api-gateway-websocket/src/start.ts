/* eslint-disable no-param-reassign */
import * as http from 'http';
import WebSocket from 'ws';
import { v4 } from 'uuid';
import AWS from 'aws-sdk';
import qs, { ParsedUrl } from 'query-string';
import { InvocationResponse } from 'aws-sdk/clients/lambda';
import waitForLambdas from './wait-for-lambdas';

const onOpenLambdaName = process.env.ON_OPEN_LAMBDA_NAME || 'websocketConnection';
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

function getPayload(connectionId: string, parsedUrl?: ParsedUrl): string {
    return JSON.stringify({
        headers: { connectionId },
        queryStringParameters: parsedUrl?.query
    });
}

async function buildConnection() {
    await waitForLambdas(lambda, [onOpenLambdaName, onCloseLambdaName]);

    console.log('starting websocket...');
    wss.on('connection', async (ws: WebSocketExtension, request: http.IncomingMessage) => {
        if (!request.url) {
            throw new Error('url is required');
        }

        ws.isAlive = true;
        ws.connectionId = v4();

        ws.on('pong', heartbeat);
        ws.on('close', async () => {
            await invokeLambda(onCloseLambdaName, getPayload(ws.connectionId));
        });
        await invokeLambda(onOpenLambdaName, getPayload(ws.connectionId, qs.parseUrl(request.url)));
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
