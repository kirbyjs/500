import ActionTypes from '../enums/action-types';

interface WebSocketMessage {
    action: ActionTypes;
    gameId: string;
}

export default WebSocketMessage;
