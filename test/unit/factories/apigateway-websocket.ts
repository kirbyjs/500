import { Sync } from 'factory.ts';
import { random } from 'faker';
import WebSocketMessage from 'src/interfaces/websocket-message';
import { ErrorResponse } from 'src/lambdas/interfaces/aws-lambda';
import { RequestActionTypes } from 'src/enums/action-types';
import ActionLambdaErrorTypes from 'src/enums/error-types';

export const websocketMessage = Sync.makeFactory<WebSocketMessage>({
    action: random.arrayElement(Object.values(RequestActionTypes)),
    gameId: random.uuid()
});

export const errorResponse = Sync.makeFactory<ErrorResponse>({
    type: random.arrayElement(Object.values(ActionLambdaErrorTypes)),
    message: random.uuid()
});
