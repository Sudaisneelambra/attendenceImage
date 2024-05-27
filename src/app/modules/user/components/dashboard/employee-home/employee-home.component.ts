import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit{

  checkInboolean:boolean =true
  date!:Date
  employeeId:any

  startTime: number = 0;
  elapsedTime: number = 0;
  timerInterval: any;

  constructor( private employeeservice:EmployeeServiceService, private commonService:CommonServiceService) {}

  ngOnInit(): void {
    this.date=new Date()
    this.getEmplyee()
  }

  checkIn(){
      this.checkInboolean = false

      this.startTime = Date.now();
      console.log(this.startTime);
      
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
      }, 1000);

      const data = {
        employeeId:this.employeeId,
        startTime:this.startTime,
        data:this.date,
      }
      this.employeeservice.checkIn(data).subscribe({
        next:(res)=>{

        },
        error:(err)=>{
          
        }
      })

  }

  formatTime(ms: number): string {
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / (1000 * 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  getEmplyee(){
    const token = this.commonService.tockendecode()
    this.employeeId = token.employeeId
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}
