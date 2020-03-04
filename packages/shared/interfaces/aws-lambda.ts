import * as lambdaTypes from 'aws-lambda'; // eslint-disable-line import/no-unresolved
import ActionLambdaErrorTypes from '../enums/error-types';

export type ApiGatewayEvent = lambdaTypes.APIGatewayEvent;
export type ApiGatewayProxyResult = lambdaTypes.APIGatewayProxyResult;
export type ApiContext = lambdaTypes.Context;

export interface ErrorResponse {
    type: ActionLambdaErrorTypes;
    message: string;
}
