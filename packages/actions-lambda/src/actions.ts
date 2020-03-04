import WebSocketMessage from 'shared/interfaces/websocket-message';
import { RequestActionTypes } from 'shared/enums/action-types';
import ActionLambdaErrorTypes from 'shared/enums/error-types';
import { ApiContext, ApiGatewayEvent, ApiGatewayProxyResult } from 'shared/interfaces/aws-lambda';
import { buildErrorResponse, buildSuccessResponse } from './helpers/response-builder';

export default function actions(event: ApiGatewayEvent, context: ApiContext): ApiGatewayProxyResult {
    if (!event.body) {
        return buildErrorResponse({
            type: ActionLambdaErrorTypes.EMPTY_REQUEST_BODY,
            message: 'Please provide a request body!'
        });
    }
    const webSocketMessage: WebSocketMessage = JSON.parse(event.body);

    // if (webSocketMessage.action === RequestActionTypes.CREATE_SESSION) {
    //     // create session code
    // }

    return buildSuccessResponse();
}
