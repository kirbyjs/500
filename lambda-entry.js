/* eslint-disable import/no-unresolved, @typescript-eslint/no-var-requires */

const { actions } = require('./packages/actions-lambda');
const { websocketDisconnection } = require('./packages/websocket-disconnection-lambda');

console.log('here');
console.log(websocketDisconnection);

module.exports = {
    actions,
    websocketDisconnection
};
