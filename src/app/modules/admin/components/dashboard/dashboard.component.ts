import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent {

  one=true

  constructor(private router:Router){}

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

gotoagency(){
  this.one=true
  // this.router.navigate(['/admin/agency-list'])
}

gotoBlockedAgency(){
  this.one=true
  // this.router.navigate(['/admin/blocked-agency'])
}

gotoblockedusers(){
  this.one=true
  // this.router.navigate(['/admin/blocked-user'])
}
gotopackage(){
  // this.router.navigate(['/admin/packages'])
}

gotoplace(){
  // this.router.navigate(['/admin/places'])
}
gotoguides(){
  // this.router.navigate(['/admin/guides'])
}
gotobookingdetails(){
  // this.router.navigate(['/admin/bookingdetails'])
}

gotoagencyreview(){
  // this.router.navigate(['/admin/agencyreview'])
}
gotomessage(){
  // this.router.navigate(['/admin/chatlist'])
}

gotopagereview(){
  // this.router.navigate(['/admin/pagereview'])
}

gotohome(){
  // this.router.navigate(['/admin'])
}

logout(){
  const confirm = window.confirm('are you sure to logout')
//  if(confirm){
  // this.adminmain.agencylogout()
//  }
}

requests(){
  // this.one=true
  // this.router.navigate(['/admin/requests'])
}
}
