import { Invoice } from "./invoice";

export class Customer{
    constructor(){}

    nazwa: string = "";
    nip: string = "";
    miasto: string = "";
    ulica: string = "";
    numerDomu: string = "";
    numerMieszkania: string ="";
    kodPocztowy: string = "";
    uwagi: string = "";
    branza: string = "";
    aktywny: boolean = true

    getAddress():string {
        return `${this.miasto} ${this.kodPocztowy} ${this.ulica} ${this.numerDomu}`;
    }
    getCustomerInfo():string {
        return `${this.nazwa} (${this.nip})`;
    }
}

class Supplier extends Customer{
    constructor(accountNumber: any){
        super();
        accountNumber = accountNumber;
    }
    accountNumber:string  = "";
    invoices:Invoice[] = [];
}