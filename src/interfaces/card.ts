import { CardSuits, CardTypes } from '../enums/card';

export interface Card {
    type: Card;
    suit?: CardSuits;
}

export interface StandardCard {
    type: CardTypes;
    suit: CardSuits;
}

export interface Joker {
    type: CardTypes.JOKER;
}
