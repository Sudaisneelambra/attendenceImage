import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './routes/admin.routes';
import { EmplyeeAddComponent } from './components/dashboard/emplyee-add/emplyee-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './components/dashboard/employee-list/employee-list.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    EmplyeeAddComponent,
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
