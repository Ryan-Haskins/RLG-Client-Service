import { Debt } from "./Debt";
import { Expense } from "./Expense";
import { Income } from "./Income";
import { Investment } from "./Investment";
import { WishItem } from "./WishItem";

export class FinanceUser {
    constructor(public Id : number,
        public FirstName : string,
        public LastName : string,
        public Debts : Debt[] = [],
        public Expenses : Expense[] = [],
        public Incomes : Income[] = [],
        public Investments : Investment[] = [],
        public WishItems : WishItem[] = []
    ){

    }
}