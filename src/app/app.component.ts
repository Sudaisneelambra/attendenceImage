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
  }
}
