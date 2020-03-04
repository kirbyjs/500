import { RequestActionTypes } from '../enums/action-types';

interface WebSocketMessage {
    action: RequestActionTypes;
    gameId: string;
}

export default WebSocketMessage;
