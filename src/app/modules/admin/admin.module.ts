import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './routes/admin.routes';
import { EmplyeeAddComponent } from './components/dashboard/emplyee-add/emplyee-add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    EmplyeeAddComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
