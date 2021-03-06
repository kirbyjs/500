import AWS from 'aws-sdk';

function waitFiveSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 5000);
    });
}

async function checkIfLambdasExist(lambdaClient: AWS.Lambda, lambda: string): Promise<undefined> {
    try {
        await lambdaClient.getFunction({ FunctionName: lambda }).promise();
        return Promise.resolve(undefined);
    } catch (e) {
        console.log(`waiting for ${lambda} lambda to be ready...`);
        await waitFiveSeconds();
        return checkIfLambdasExist(lambdaClient, lambda);
    }
}

export default function waitForLambdas(lambdaClient: AWS.Lambda, lambdaFunctionNames: string[]) {
    const promises = lambdaFunctionNames.map((lambda) => checkIfLambdasExist(lambdaClient, lambda));

    return new Promise((resolve) => Promise.all(promises).then(() => resolve()));
}
