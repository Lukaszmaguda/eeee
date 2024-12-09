import { Component } from '@angular/core';
import { Customer } from '../../invoice/models/customer';

@Component({
  selector: 'app-product-form-component',
  imports: [],
  templateUrl: './product-form-component.component.html',
  styleUrl: './product-form-component.component.scss'
})
export class ProductFormComponentComponent {
  customer : Customer = new Customer();
}
