import { Transaction } from "./Transaction";

export class Investment {
    constructor (public Id : number,
        public Source : string, 
        public Amount : number, 
        public InitialTotal : number, 
        public CurrentTotal : number,
        public PreviousYearTotal : number,
        public StartDate : Date,
        public Closed : boolean,
        public YearlyGrowth : number,
        public TotalFees : number,
        public FeeCharge : number,
        public InterestRate : number,
        public Transactions : Transaction[] = [],
        public UserId : number){

    }
}