import { ApiGatewayProxyResult, ErrorResponse } from 'shared/interfaces/aws-lambda';

function buildResponse(body: string, statusCode: number): ApiGatewayProxyResult {
    return {
        statusCode,
        body
    };
}

export function buildSuccessResponse(body = '', statusCode = 200): ApiGatewayProxyResult {
    return buildResponse(body, statusCode);
}

export function buildErrorResponse(body: ErrorResponse, statusCode = 500): ApiGatewayProxyResult {
    return buildResponse(JSON.stringify(body), statusCode);
}
