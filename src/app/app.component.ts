import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'attendenceFrontEnd';

  loadingBoolean !: boolean 
  confirmBoolean !:boolean
  errorBoolean !:boolean
  successBoolean !:boolean
  notificationBoolean !: boolean


  constructor ( private commonService:CommonServiceService) {}

  ngOnInit(): void {
      this.commonService.loadingSubject.subscribe((val)=>{
        this.loadingBoolean = val
      })

      this.commonService.confirmBooleanSubject.subscribe((val)=>{
        this.confirmBoolean = val
      })

      this.commonService.errorBooleanSubject.subscribe((val)=>{
        this.errorBoolean = val
      })

      this.commonService.successBooleanSubject.subscribe((val)=>{
        this.successBoolean = val
      })

      this.commonService.notificationBooleanSubject.subscribe((val)=>{
        this.notificationBoolean = val
      })

      alert(`dear user
      Admin Can only add the user and the user Login credentials send into users email.the user can login with that credential. If you want to explore it U can login as a admin and add your details login with that....
      
      ADMIN Credential :
      email:- sudaisanuneelambra21@gmail.com,
      PASSWORD :- SUDA9747   
      
      use this for login`)
  }
}
