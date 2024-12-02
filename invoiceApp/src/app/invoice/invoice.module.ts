import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponentComponent } from './customer-list-component/customer-list-component.component';
import { FormsModule } from '@angular/forms';
import { InvoiceRoutingModule } from './invoice-routing.module';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponentComponent
  ],
  exports:[
    CustomerFormComponent,
    CustomerListComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InvoiceRoutingModule,

  ]
})
export class InvoiceModule { }
