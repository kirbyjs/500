/* eslint-disable import/no-unresolved, @typescript-eslint/no-var-requires */

const { actions } = require('./packages/actions-lambda');
const { websocketDisconnection } = require('./packages/websocket-disconnection-lambda');

module.exports = {
    actions,
    websocketDisconnection
};
