import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/modules/user/services/socket.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  one=true

  constructor(private router:Router,private commonService:CommonServiceService ,private socketService:SocketService){}

  ngOnInit(): void {
    const token = this.commonService.tockendecode()
    const emplyeeName = token.name
    const employeeId =token.employeeId
    
    this.socketService.connectWithSocket(emplyeeName,employeeId);
  }

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
  this.router.navigate(['/admin/all-Leave-Requests'])
}

attendence(){
  this.one=true
  this.router.navigate(['/admin/admin-attendence'])
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

}
