import { ApiContext, ApiGatewayEvent, ApiGatewayProxyResult } from './interfaces/aws-lambda';
import WebSocketMessage from '../interfaces/websocket-message';
import ActionTypes from '../enums/action-types';
import { buildErrorResponse, buildSuccessResponse } from './helpers/response-builder';
import ActionLambdaErrorTypes from '../enums/error-types';

export default function actions(event: ApiGatewayEvent, context: ApiContext): ApiGatewayProxyResult {
    if (!event.body) {
        return buildErrorResponse({
            type: ActionLambdaErrorTypes.EMPTY_REQUEST_BODY,
            message: 'Please provide a request body!'
        });
    }
    const webSocketMessage: WebSocketMessage = JSON.parse(event.body);

    // if (webSocketMessage.action === ActionTypes.CREATE_SESSION) {
    //     // create session code
    // }

    return buildSuccessResponse();
}
