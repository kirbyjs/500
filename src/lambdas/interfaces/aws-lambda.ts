import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import ActionLambdaErrorTypes from '../../enums/error-types'; // eslint-disable-line import/no-unresolved

export type ApiGatewayEvent = APIGatewayEvent;
export type ApiGatewayProxyResult = APIGatewayProxyResult;
export type ApiContext = Context;

export interface ErrorResponse {
    type: ActionLambdaErrorTypes;
    message: string;
}
