/* eslint-disable no-param-reassign */
import WebSocket from 'ws';
import { v4 } from 'uuid';
import AWS from 'aws-sdk';
import { InvocationResponse } from 'aws-sdk/clients/lambda';
import WebSocketMessage from '../../packages/shared/interfaces/websocket-message';

interface WebSocketExtension extends WebSocket {
    isAlive: boolean;
    connectionId: string;
}
interface WebSocketServerExtension extends WebSocket.Server {
    clients: Set<WebSocketExtension>;
}

const NOOP = () => undefined;
const lambda = new AWS.Lambda({
    endpoint: 'http://localstack:4574',
    region: 'us-east-1'
});
const wss = new WebSocket.Server({ port: 7777 }) as WebSocketServerExtension;

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

function getPayload(connectionId: string, body?: WebSocketMessage): string {
    return JSON.stringify({
        headers: { connectionId },
        body: JSON.stringify(body)
    });
}

wss.on('connection', (ws: WebSocketExtension) => {
    ws.isAlive = true;
    ws.connectionId = v4();

    ws.on('pong', heartbeat);
    ws.on('message', async (message: string) => {
        await invokeLambda('actions', getPayload(ws.connectionId, JSON.parse(message)));
    });
    ws.on('close', async () => {
        await invokeLambda('websocketDisconnection', getPayload(ws.connectionId));
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
