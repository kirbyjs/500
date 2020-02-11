import * as responseBuilder from 'src/lambdas/helpers/response-builder';
import WebSocketMessage from 'src/interfaces/websocket-message';
import { actions } from 'src/lambdas';
import { ApiContext, ApiGatewayEvent } from 'src/lambdas/interfaces/aws-lambda';
import ActionLambdaErrorTypes from 'src/enums/error-types';
import * as lambdaFactories from './factories/lambda';
import * as apigatewayWebsocketFactories from '../factories/apigateway-websocket';

jest.mock('src/lambdas/helpers/response-builder');

describe('Feature: Actions Lambda', () => {
    const buildSuccessResult = Symbol('buildSuccessResult');
    const buildErrorResult = Symbol('buildErrorResult');
    let websocketMessage: WebSocketMessage,
        event: ApiGatewayEvent,
        context: ApiContext;

    beforeEach(() => {
        websocketMessage = apigatewayWebsocketFactories.websocketMessage.build();
        event = lambdaFactories.lambdaEvent.build();
        context = lambdaFactories.lambdaContext.build();

        (responseBuilder.buildSuccessResponse as jest.Mock).mockReturnValue(buildSuccessResult);
        (responseBuilder.buildErrorResponse as jest.Mock).mockReturnValue(buildErrorResult);
    });

    afterEach(() => jest.clearAllMocks());

    it('should build success response', () => {
        event = lambdaFactories.lambdaEvent.build({
            body: JSON.stringify(websocketMessage)
        });

        // when
        actions(event, context);

        expect(responseBuilder.buildErrorResponse).not.toHaveBeenCalled();
        expect(responseBuilder.buildSuccessResponse).toHaveBeenCalledTimes(1);
        expect(responseBuilder.buildSuccessResponse).toHaveReturnedWith(buildSuccessResult);
    });


    it.each(['', null])('should error response for %s', (falsyValue) => {
        event = lambdaFactories.lambdaEvent.build({
            body: falsyValue
        });

        // when
        actions(event, context);

        expect(responseBuilder.buildSuccessResponse).not.toHaveBeenCalled();
        expect(responseBuilder.buildErrorResponse).toHaveBeenCalledTimes(1);
        expect(responseBuilder.buildErrorResponse).toHaveReturnedWith(buildErrorResult);
        expect(responseBuilder.buildErrorResponse).toHaveBeenCalledWith({
            type: ActionLambdaErrorTypes.EMPTY_REQUEST_BODY,
            message: 'Please provide a request body!'
        });
    });
});
