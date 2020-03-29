import { random } from 'faker';
import { buildErrorResponse, buildSuccessResponse } from 'src/helpers/response-builder';
import * as apigatewayWebsocket from 'shared/test/factories/apigateway-websocket';

describe('Feature: Building out Lambda Responses', () => {
    it('should build default success response', () => {
        // when
        const response = buildSuccessResponse();

        expect(response).toEqual({
            statusCode: 200,
            body: ''
        });
    });

    it('should be abe to customize success response', () => {
        const body = random.uuid();
        const randomSuccessCode = random.number({ min: 200, max: 299 });

        // when
        const response = buildSuccessResponse(body, randomSuccessCode);

        expect(response).toEqual({
            statusCode: randomSuccessCode,
            body
        });
    });

    it('should build default error response', () => {
        const errorResponse = apigatewayWebsocket.errorResponse.build();

        // when
        const response = buildErrorResponse(errorResponse);

        expect(response).toEqual({
            statusCode: 500,
            body: JSON.stringify(errorResponse)
        });
    });

    it('should be abe to customize success response', () => {
        const errorResponse = apigatewayWebsocket.errorResponse.build();
        const randomErrorCode = random.number({ min: 500, max: 599 });

        // when
        const response = buildErrorResponse(errorResponse, randomErrorCode);

        expect(response).toEqual({
            statusCode: randomErrorCode,
            body: JSON.stringify(errorResponse)
        });
    });
});
