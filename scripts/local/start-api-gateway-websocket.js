/* eslint-disable no-param-reassign */
import WebSocket from 'ws';
import { v4 } from 'uuid';
import AWS from 'aws-sdk';

const lambda = new AWS.Lambda({
    endpoint: 'http://localstack:4574',
    region: 'us-east-1'
});
const wss = new WebSocket.Server({ port: 7777 });

const NOOP = () => undefined;
function heartbeat() {
    this.isAlive = true;
}
async function invokeLambda(name, payload) {
    return new Promise((resolve, reject) => {
        lambda.invoke({ FunctionName: name, Payload: payload }, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}

function getPayload(connectionId, body) {
    return JSON.stringify({
        headers: { connectionId },
        body
    });
}

wss.on('connection', (ws) => {
    ws.isAlive = true;
    ws.connectionId = v4();

    ws.on('pong', heartbeat);
    ws.on('message', async (message) => {
        await invokeLambda('actions', getPayload(ws.connectionId, JSON.parse(message)));
    });
    ws.on('close', async () => {
        await invokeLambda('websocketDisconnection', getPayload(ws.connectionId));
    });
});

setInterval(() => {
    wss.clients.forEach((ws) => {
        if (ws.isAlive) {
            ws.isAlive = false;
            ws.ping(NOOP);
        } else {
            ws.terminate();
        }
    });
}, 30000);
