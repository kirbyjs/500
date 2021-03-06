import { Sync } from 'factory.ts';
import { ApiGatewayEvent, ApiContext } from 'shared/interfaces/aws-lambda';

export const lambdaEvent = Sync.makeFactory<ApiGatewayEvent>({
    body: null
} as ApiGatewayEvent);

export const lambdaContext = Sync.makeFactory<ApiContext>({} as ApiContext);
