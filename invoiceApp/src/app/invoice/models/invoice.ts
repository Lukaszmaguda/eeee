import {Tax} from "../enums/tax";
import {Unit} from "../enums/unit";

export class Invoice{
    constructor(name: string, quantity: number){
        this.name = name;
        this.quantity = quantity;
    }

    name: string;
    quantity: number;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}
