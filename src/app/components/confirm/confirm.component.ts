import { Component } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-confirm',
  imports:[],
  standalone:true,
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  message!:string
  data:any

  constructor(private commonService:CommonServiceService) {}

  ngOnInit() {

    // confirmation message getting through behavior subject
      this.commonService.confirmMessage.subscribe((value)=>{
        this.message=value
      })

    // data passed from any tath access and call promise resolve in here
      this.commonService.data.subscribe((value)=>{
        this.data=value
      })
  }


  // cancellation of confirm modal
  cancellation(){
    this.commonService.confirmBooleanSubject.next(false)
    this.commonService.confirmMessage.next('')
  }

  // confirm the modal
  confirm(){
    this.data?.resolve()
  }
}
