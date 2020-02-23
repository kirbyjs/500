import { CardSuits, CardTypes } from '../enums/card';

export interface Card {
    type: Card;
    suit?: CardSuits;
}

export interface StandardCard extends CardTypes {
    type: CardTypes;
    suit: CardSuits;
}

export interface Joker extends CardTypes {
    type: CardTypes.JOKER;
}
