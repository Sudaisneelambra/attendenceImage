import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './components/dashboard/dashboard.component';
import { UserRoutingModule } from './routes/user.routes';



@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
