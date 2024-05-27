import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { AdminServiceService } from '../../../services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplyee-add',
  templateUrl: './emplyee-add.component.html',
  styleUrls: ['./emplyee-add.component.css']
})
export class EmplyeeAddComponent {

  addEmplyeeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminServiceService,
    private commonService: CommonServiceService,
    private router:Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addEmplyeeForm = this.formBuilder.group({
      username: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }




  onSubmit() {
      if (this.addEmplyeeForm.valid) {
            this.commonService.confirmBooleanSubject.next(true)
            this.commonService.confirmMessage.next('Do you confirm to add this Employee')
            const data =this.addEmplyeeForm.value
            const promis = new Promise((resolve,reject)=>{
              data.resolve= resolve
            })

                 promis.then(()=>{
                  this.commonService.loadingSubject.next(true)
                  this.adminService.addEmployee(this.addEmplyeeForm.value).subscribe({
                    next: (res) => {
                      this.commonService.successBooleanSubject.next(true)
                      this.commonService.successMessage.next(res.message)
                      this.commonService.confirmBooleanSubject.next(false)
                      this.commonService.confirmMessage.next('')
                      this.addEmplyeeForm.reset();
                      this.commonService.loadingSubject.next(false);
                      this.router.navigate(['/admin'])
                    },
                    error: (err) => {
                      console.log(err);
                      this.commonService.errorBooleanSubject.next(true)
                      this.commonService.errorMessage.next(err.error.message)
                      this.commonService.confirmBooleanSubject.next(false)
                      this.commonService.confirmMessage.next('')
                      this.commonService.loadingSubject.next(false);
                    },
                  });
                 })
             this.commonService.data.next(data);
      } else {
            alert('Please check the form for errors');
      }
  }
}
