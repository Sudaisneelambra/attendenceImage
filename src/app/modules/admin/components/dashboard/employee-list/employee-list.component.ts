import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { AdminServiceService } from '../../../services/admin-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private adminService: AdminServiceService,
    private commonService: CommonServiceService
  ) {}
  userList: any;

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers() {
    setTimeout(() => {
      this.commonService.loadingSubject.next(true); 
    },0);
    this.adminService.showAllEmployees().subscribe({
      next: (res) => {
        this.commonService.loadingSubject.next(false);
        this.userList = res.userList;
      },
      error: (err) => {
        this.commonService.loadingSubject.next(false);
        console.log(err);
      },
    });
  }

  changeBlockStatus(userId: any) {

    setTimeout(() => {
      this.commonService.loadingSubject.next(true); 
    },0);


    this.adminService.blockAndUnblockEmployee(userId).subscribe({
      next: (res) => {
        this.commonService.loadingSubject.next(false);
        this.showUsers();
      },
      error: (err) => {
        this.commonService.loadingSubject.next(false);
        console.log(err);
      },
    });
  }
}
