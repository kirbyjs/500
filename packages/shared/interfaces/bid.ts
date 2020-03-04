import { BidTypes, BidNumbers } from '../enums/bid';

interface Bid {
    bidType: BidTypes;
    bidNumber?: BidNumbers;
    userId: string;
}

export default Bid;
