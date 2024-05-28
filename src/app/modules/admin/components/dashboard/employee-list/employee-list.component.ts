import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { AdminServiceService } from '../../../services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private adminService: AdminServiceService,
    private commonService: CommonServiceService,
    private router:Router
  ) {}
  userList: any;

  ngOnInit(): void {
    this.showUsers();
  }


  // show all Users
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

  // block and unbloack user
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

  // show employee Full details
  showFullDetails(id:any,name:any,number:any){
    this.router.navigate(['/admin/employeeFull-Detail',id,name,number])
  }
}
