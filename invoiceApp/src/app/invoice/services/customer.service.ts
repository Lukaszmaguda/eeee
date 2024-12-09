import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customerList: Customer[] = [];

  addCustomer(customer: Customer): void{
    this.customerList.push(customer)
  }
  getCustomer(): Customer[]{
    return this.customerList;
  }
}
