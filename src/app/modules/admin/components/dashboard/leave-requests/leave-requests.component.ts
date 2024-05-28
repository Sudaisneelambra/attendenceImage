import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../services/admin-service.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent implements OnInit {

  constructor(
    private adminService: AdminServiceService,
    private commonService: CommonServiceService
  ) {}
  requestList: any;

  ngOnInit(): void {
    this.showRequest();
  }

  // getting all leave requests
  showRequest() {
    setTimeout(() => {
      this.commonService.loadingSubject.next(true); 
    },0);
    this.adminService.showRequest().subscribe({
      next: (res) => {
        this.commonService.loadingSubject.next(false);
        this.requestList = res.requestList;
      },
      error: (err) => {
        this.commonService.loadingSubject.next(false);
        console.log(err);
      },
    });
  }

  // leave approve
  approveTheLeave(leaveId: any) {

    setTimeout(() => {
      this.commonService.loadingSubject.next(true); 
    },0);


    this.adminService.leaveApprove(leaveId).subscribe({
      next: (res) => {
        this.commonService.loadingSubject.next(false);
        this.showRequest();
      },
      error: (err) => {
        this.commonService.loadingSubject.next(false);
        console.log(err);
      },
    });
  }
}
