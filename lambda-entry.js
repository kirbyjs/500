// Created by kirbyjs on 2/4/20.

const indexLambda = require('./lib/lambdas'); // eslint-disable-line import/no-unresolved

module.exports = {
    actions: indexLambda.actions,
    websocketConnections: indexLambda.websocketConnections
};
