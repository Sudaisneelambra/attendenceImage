import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-notification',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
  
  notificationMessage !: any 
  
  constructor( private commonService:CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.notificationMessage.subscribe((val)=>{
      this.notificationMessage = val
    })
  }

  // cancell notification
  cancelNotification(){
    this.commonService.notificationBooleanSubject.next(false)
    this.commonService.notificationMessage.next({})
  }
}
