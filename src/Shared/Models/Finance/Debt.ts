export class Debt {
    constructor(public Id : number, 
        public Source : string, 
        public DebtTotal : number, 
        public Paid : boolean = false, 
        public DebtDate : Date, 
        public UserId : number)
        {

        }
}