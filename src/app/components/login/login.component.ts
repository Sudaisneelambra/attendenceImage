import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message :string | undefined
  errorMessage :string | undefined
  loginForm!: FormGroup;
  submitted: boolean | undefined

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginServiceService,
    private commonService:CommonServiceService,
    private router:Router
  ) {}
  

  ngOnInit(): void {
    this.initializeForm();
  }

  // login form
  initializeForm() {
    this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
          userType: ['',Validators.required]
    });
  }

  // login
  login() {

    this.submitted = true
    this.errorMessage = ''
    this.message = ''
    
    if (this.loginForm.valid) {
        this.commonService.loadingSubject.next(true)
            this.loginService.userLogin(this.loginForm.value).subscribe({
                 next: (res) => {
                 this.commonService.loadingSubject.next(false)
                    if(res.success) {
                        this.message = res.message
                        localStorage.setItem('token',res.token)
                        const token =this.commonService.tockendecode()
                            if(token.type){
                            this.router.navigate(['/admin'])
                            } else {
                                this.router.navigate(['/employee'])
                            }
                    } else {
                      this.errorMessage=res.message
                    }
        },
        error: (err) => {
            this.commonService.loadingSubject.next(false)
            this.errorMessage=err.error.message
            console.log(err);
        },
      });
    } else {
            alert('fill the fields or fill in correct formate');
    }
  }
}
