export class WishItemBreakdown {
    constructor(public Id : number,
        public WishItemId : number,
        public Description : string = "",
        public Cost : number,
        public Allocated : number,
        public AllocatedDate : Date
    ){

    }
}