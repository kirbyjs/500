import { ApiContext, ApiGatewayEvent } from 'shared/interfaces/aws-lambda';

export default function websocketConnection(event: ApiGatewayEvent, context: ApiContext) {
    return { statusCode: 200 };
}
