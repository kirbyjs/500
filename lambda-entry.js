/* eslint-disable import/no-unresolved, @typescript-eslint/no-var-requires */

const indexLambda = require('./lib/lambdas');

module.exports = {
    actions: indexLambda.actions,
    websocketDisconnection: indexLambda.websocketDisconnection
};
