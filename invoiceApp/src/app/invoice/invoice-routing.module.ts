import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponentComponent } from './customer-list-component/customer-list-component.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'customer-list',
    component: CustomerListComponentComponent
  },
  {
    path: 'customer-component',
    component: CustomerFormComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
