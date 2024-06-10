import { WishItemBreakdown } from "./WishItemBreakdown";

export class WishItem {
    constructor(public Id : number,
        public Description : string,
        public Cost : number,
        public Allocated : number,
        public Completed : boolean,
        public WishBreakdowns : WishItemBreakdown[] = [],
        public UserId : number
    ){

    }
}