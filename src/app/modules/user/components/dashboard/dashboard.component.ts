import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  one = true;

  constructor(
    private router: Router,
    private socketService: SocketService,
    private commonService: CommonServiceService
  ) {}

  ngOnInit(): void {
    const token = this.commonService.tockendecode()
    const emplyeeName = token.name
    this.socketService.connectWithSocket(emplyeeName);
  }

  boolean() {
    if (this.one) {
      this.one = false;
    } else {
      this.one = true;
    }
  }

  employeeAdd() {
    this.one = true;
    this.router.navigate(['/admin/EmployeeAdd']);
  }

  gotoagency() {
    this.one = true;
    // this.router.navigate(['/admin/agency-list'])
  }

  gotoBlockedAgency() {
    this.one = true;
    // this.router.navigate(['/admin/blocked-agency'])
  }

  gotoblockedusers() {
    this.one = true;
    // this.router.navigate(['/admin/blocked-user'])
  }
  gotopackage() {
    // this.router.navigate(['/admin/packages'])
  }

  gotoplace() {
    // this.router.navigate(['/admin/places'])
  }
  gotoguides() {
    // this.router.navigate(['/admin/guides'])
  }
  gotobookingdetails() {
    // this.router.navigate(['/admin/bookingdetails'])
  }

  gotoagencyreview() {
    // this.router.navigate(['/admin/agencyreview'])
  }
  gotomessage() {
    // this.router.navigate(['/admin/chatlist'])
  }

  gotopagereview() {
    // this.router.navigate(['/admin/pagereview'])
  }

  gotohome() {
    // this.router.navigate(['/admin'])
  }

  logout() {
    const confirm = window.confirm('are you sure to logout');
     if(confirm){
        this.commonService.logOut()
     }
  }

  requests() {
    // this.one=true
    // this.router.navigate(['/admin/requests'])
  }
}
