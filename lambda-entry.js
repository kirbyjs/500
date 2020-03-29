/* eslint-disable import/no-unresolved, @typescript-eslint/no-var-requires */

require('@babel/register')({
    extends: './babel.config.js',
    root: '.',
    extensions: ['.ts', '.js']
});
const actions = require('./packages/actions-lambda/dev');
const { websocketConnection, websocketDisconnection } = require('./packages/websocket-connection-lambdas/dev');

module.exports = {
    actions,
    websocketConnection,
    websocketDisconnection
};
