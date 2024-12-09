import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list-component',
  standalone: false,
  templateUrl: './customer-list-component.component.html',
  styleUrl: './customer-list-component.component.scss'
})
export class CustomerListComponentComponent {
  customerList: Customer[];
  constructor(
    private customerService: CustomerService){
      console.log(this.customerService.getCustomer());
      this.customerList = this.customerService.getCustomer();
  
      
}}
