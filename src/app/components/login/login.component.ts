import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message!:string
  errormessage!:string
  loginForm!: FormGroup;
  loginButton: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    // private commonService: CommonService,
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
    });
  }

  // login
  login() {
    // this.errormessage=''
    // this.message=''
    // this.loginButton = true;
    // if (this.loginForm.valid) {
    //   this.commonService.loadingbooleanValue.next(true)
    //   this.commonService.login(this.loginForm.value).subscribe({
    //     next: (res) => {
    //       this.commonService.loadingbooleanValue.next(false)
    //       if(res.success) {
    //         this.message=res.message
    //         localStorage.setItem('token',res.token)
    //         const token =this.commonService.tockendecode()
    //         if(token.type){
    //           this.router.navigate(['/admin'])
    //         } else {
    //           this.router.navigate(['/user'])
    //         }
    //       } else {
    //         this.errormessage=res.message
    //       }
    //     },
    //     error: (err) => {
    //       this.commonService.loadingbooleanValue.next(false)
    //       this.errormessage=err.error.message
    //       console.log(err);
    //     },
    //   });
    // } else {
    //   alert('fill the fields or fill in correct formate');
    // }
  }
}
