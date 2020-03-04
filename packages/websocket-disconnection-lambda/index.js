// eslint-disable-next-line @typescript-eslint/no-var-requires
const websocketDisconnection = require('./lib/websocket-disconnection');

module.exports = {
    websocketDisconnection: websocketDisconnection.default
};
