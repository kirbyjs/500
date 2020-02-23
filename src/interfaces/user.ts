import { Card } from './card';

export default interface User {
    name: string;
}

export interface ContextualUser extends User {
    cards: Card[];
}
