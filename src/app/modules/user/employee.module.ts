import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './components/dashboard/dashboard.component';
import { UserRoutingModule } from './routes/employee.routes';
import { EmployeeHomeComponent } from '../../components/employee-home/employee-home.component';
import { LeaveApplicationComponent } from './components/dashboard/leave-application/leave-application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AttendenceComponent } from './components/dashboard/attendence/attendence.component';





@NgModule({
  declarations: [
    UserDashboardComponent,
    EmployeeHomeComponent,
    LeaveApplicationComponent,
    AttendenceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
