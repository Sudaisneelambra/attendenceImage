import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './components/dashboard/dashboard.component';
import { UserRoutingModule } from './routes/employee.routes';
import { EmployeeHomeComponent } from './components/dashboard/employee-home/employee-home.component';
import { LeaveApplicationComponent } from './components/dashboard/leave-application/leave-application.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    EmployeeHomeComponent,
    LeaveApplicationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
