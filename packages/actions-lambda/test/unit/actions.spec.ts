import * as responseBuilder from 'src/helpers/response-builder';
import WebSocketMessage from 'shared/interfaces/websocket-message';
import { ApiContext, ApiGatewayEvent } from 'shared/interfaces/aws-lambda';
import ActionLambdaErrorTypes from 'shared/enums/error-types';
import * as apigatewayWebsocketFactories from 'shared/factories/apigateway-websocket';
import actions from 'src/actions';
import * as lambdaFactories from './factories/lambda';

jest.mock('src/helpers/response-builder');

describe('Feature: Actions Lambda', () => {
    const buildSuccessResult = Symbol('buildSuccessResult');
    const buildErrorResult = Symbol('buildErrorResult');
    let websocketMessage: WebSocketMessage, event: ApiGatewayEvent, context: ApiContext;

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

    it.each(['', null])('should error response for %s', falsyValue => {
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
