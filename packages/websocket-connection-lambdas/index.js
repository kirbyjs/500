// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-unresolved
const websocketDisconnection = require('./lib/websocket-disconnection');

module.exports = {
    websocketDisconnection: websocketDisconnection.default
};
