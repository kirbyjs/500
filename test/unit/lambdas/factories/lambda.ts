import { Sync } from 'factory.ts';
import faker from 'faker';
import { ApiGatewayEvent, ApiContext } from 'src/lambdas/interfaces/aws-lambda';

export const lambdaEvent = Sync.makeFactory<ApiGatewayEvent>({
    headers: {},
    body: null,
    httpMethod: '',
    multiValueQueryStringParameters: {},
    pathParameters: null,
    queryStringParameters: null,
    stageVariables: null,
    multiValueHeaders: {},
    isBase64Encoded: faker.random.boolean(),
    path: faker.system.directoryPath(),
    resource: faker.system.commonFileType(),
    requestContext: {
        accountId: faker.random.uuid(),
        apiId: faker.random.uuid(),
        httpMethod: 'GET',
        identity: {
            accessKey: null,
            accountId: null,
            apiKey: null,
            apiKeyId: null,
            caller: null,
            cognitoAuthenticationProvider: null,
            cognitoAuthenticationType: null,
            cognitoIdentityId: null,
            cognitoIdentityPoolId: null,
            principalOrgId: null,
            sourceIp: faker.internet.ip(),
            user: null,
            userAgent: null,
            userArn: null
        },
        path: faker.system.directoryPath(),
        stage: 'v1',
        requestId: faker.random.uuid(),
        requestTimeEpoch: faker.date.recent().getTime(),
        resourceId: faker.random.uuid(),
        resourcePath: faker.system.directoryPath()
    }
});

export const lambdaContext = Sync.makeFactory<ApiContext>({
    awsRequestId: faker.random.uuid(),
    callbackWaitsForEmptyEventLoop: false,
    functionName: faker.system.commonFileType(),
    functionVersion: faker.system.semver(),
    invokedFunctionArn: faker.random.uuid(),
    logGroupName: faker.system.commonFileType(),
    logStreamName: faker.random.uuid(),
    memoryLimitInMB: faker.random.number({ min: 0, max: 1000 }).toString(),
    done: jest.fn(),
    fail: jest.fn(),
    getRemainingTimeInMillis: jest.fn().mockReturnValue(faker.date.recent().getMilliseconds()),
    succeed: jest.fn()
});
