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

  goToCheckIn() {
    this.one = true;
    this.router.navigate(['/employee']);
  }

  goToLeaveAppy() {
    this.one = true;
    this.router.navigate(['/employee/leave-Application'])
  }

  attendence() {
    this.one = true;
    // this.router.navigate(['/admin/blocked-agency'])
  }

  gotohome() {
    this.router.navigate(['/employee'])
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
