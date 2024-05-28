import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit{

  data:any
  constructor ( private employeeService:EmployeeServiceService, private commonService:CommonServiceService) {}

  ngOnInit(): void {
    this.getAttendance()
    
  }

  timesplice(dt:any){
    if(dt){
      const [date, time] =dt?.split(', ')
      return time
    } else {
      return 'No Check Out'
    }
    
  }

  getAttendance(){
    setTimeout(() => {
      this.commonService.loadingSubject.next(true)
    }, 0);
      this.employeeService.getAttendance().subscribe({
        next:(res) =>{
          if(res.success) {
            this.data = res.data
          }
          this.commonService.loadingSubject.next(false)
        },
        error:(err)=>{
          this.commonService.loadingSubject.next(false)
          this.commonService.errorBooleanSubject.next(true)
          this.commonService.errorMessage.next(err.error.message)
        }
      })
  }

}

