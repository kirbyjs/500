import { Card } from './card';

interface User {
    name: string;
}

export interface ContextualUser extends User {
    cards: Card[];
}

export default User;
