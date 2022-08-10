import { Person } from "./person";

export class GroupSpending {

    id?:number;
    additionals?: number;
    discounts?: number;
    globalBill?: number;
    hasWaiterAdd?: boolean;
    peopleList?: Array<Person>;


}