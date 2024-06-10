export class Expense {
    constructor(public Id : number, 
        public Source : string, 
        public Amount : number, 
        public ExpenseDate : Date, 
        public Category : Category, 
        public UserId : number )
    {

    }
}