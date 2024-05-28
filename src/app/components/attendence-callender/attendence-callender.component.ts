import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-attendence-callender',
  templateUrl: './attendence-callender.component.html',
  styleUrls: ['./attendence-callender.component.css']
})
export class AttendenceCallenderComponent implements OnInit  {
  
  showCalendar:boolean=false;

  constructor(
    private commonService:CommonServiceService,
  ){}


  eventsArray:any =[] 
  datas:any = []


  // calender Creation
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: this.eventsArray, 
  };


  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }


  ngOnInit(): void {
    this.commonService.getAttendence().subscribe({
      next:(res)=>{
        if(res.success){
          res.data.map((el:any)=>{
            this.eventsArray.push(el)   
          })
          
          this.showCalendar=true
        }
      },
      error:(err)=>{
        this.commonService.errorBooleanSubject.next(true)
        this.commonService.errorMessage.next(err.error.message)
      }
    })
  }

  

}

