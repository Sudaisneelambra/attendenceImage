import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './components/dashboard/dashboard.component';
import { UserRoutingModule } from './routes/employee.routes';
import { EmployeeHomeComponent } from '../../components/employee-home/employee-home.component';
import { LeaveApplicationComponent } from './components/dashboard/leave-application/leave-application.component';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    UserDashboardComponent,
    EmployeeHomeComponent,
    LeaveApplicationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatButtonModule,
    MatCardModule 
  ]
})
export class UserModule { }
