import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css'],
})
export class LeaveApplicationComponent implements OnInit {
  leaveRequestForm: FormGroup;
  employeeId: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeServiceService,
    private commonService: CommonServiceService,
    private router:Router
  ) {
    this.leaveRequestForm = this.fb.group({
      employeeName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.employeeDetail();
  }

  onSubmit() {
    if (this.leaveRequestForm.valid) {
      this.commonService.loadingSubject.next(true);
      const data = this.leaveRequestForm.value;
      data.employeeId = this.employeeId;
      this.employeeService.requestForLeave(data).subscribe({
        next: (res) => {
          this.commonService.loadingSubject.next(false);
          if (res.success) {
            this.commonService.successBooleanSubject.next(true);
            this.commonService.successMessage.next(res.message);
            this.router.navigate(['/employee']);
          } else {
            this.commonService.successBooleanSubject.next(false);
            this.commonService.successMessage.next(res.message);
          }
        },
        error: (err) => {
          this.commonService.loadingSubject.next(false);
          this.commonService.errorBooleanSubject.next(true)
          this.commonService.errorMessage.next(err.error.message);
        },
      });
    }
  }

  employeeDetail() {
    const token = this.commonService.tockendecode();
    this.employeeId = token.employeeId;
  }
}
