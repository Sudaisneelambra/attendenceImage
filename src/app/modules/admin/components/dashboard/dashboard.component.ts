import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent {

  one=true

  constructor(private router:Router,private commonService:CommonServiceService){}

boolean(){
  if(this.one){
    this.one=false
  } else {
    this.one=true
  }
}

employeeAdd(){
  this.one=true
  this.router.navigate(['/admin/EmployeeAdd'])
  
}

goToCheckIn(){
  this.one= true
  this.router.navigate(['/admin'])

}

getAllEmployees(){
  this.one=true
  this.router.navigate(['/admin/all-Employees'])
}

leaveRequest(){
  this.one=true
  // this.router.navigate(['/admin/blocked-agency'])
}

attendence(){
  this.one=true
  // this.router.navigate(['/admin/blocked-user'])
}

gotohome(){
  this.router.navigate(['/admin'])
}

logout(){
  const confirm = window.confirm('are you sure to logout')
 if(confirm){
  this.commonService.logOut()
 }
}

requests(){
  // this.one=true
  // this.router.navigate(['/admin/requests'])
}
}
