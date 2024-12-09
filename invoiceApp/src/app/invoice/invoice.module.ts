import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponentComponent } from './components/customer-list-component/customer-list-component.component';
import { FormsModule } from '@angular/forms';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponentComponent,
    CustomerListElementComponent,
  ],
  exports:[
    CustomerFormComponent,
    CustomerListComponentComponent,
    CustomerListElementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InvoiceRoutingModule,

  ]
})
export class InvoiceModule { }
