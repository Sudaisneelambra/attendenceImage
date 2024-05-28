import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../modules/user/services/employee-service.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css'],
})
export class EmployeeHomeComponent implements OnInit {

  checkInboolean: boolean = true;
  breakBoolean: boolean = true;
  date!: any;
  employeeId: any;
  employeeName:any
  data:any

  startTime: number = 0;
  workingTime: number = 0;
  timerInterval: any;

  breakStart:number = 0
  breakTime: number =0
  breakTimerInterval :any

  constructor(
    private employeeservice: EmployeeServiceService,
    private commonService: CommonServiceService
  ) {}

  ngOnInit(): void {
    this.date = new Date();
    this.getEmplyee();
    this.checkCheckined();
    this.checkBreak();
  }

  // employee CheckIn
  checkIn() {
    this.commonService.loadingSubject.next(true)
    this.startTime = Date.now();
    this.date = new Date();
    const dateString = this.date.toDateString();

    this.date = this.date.toString();

    const data = {
      employeeId: this.employeeId,
      date: dateString,
    };

    this.employeeservice.checkIn(data).subscribe({
      next: (res) => {
        if (res.success) {
          this.commonService.loadingSubject.next(false)
          this.checkInboolean = false;
          this.commonService.successBooleanSubject.next(true);
          this.commonService.successMessage.next('Success Fully Checkined');

          this.timerInterval = setInterval(() => {
            this.workingTime = Date.now() - this.startTime;
          }, 1000);
        }
      },
      error: (err) => {
        this.commonService.loadingSubject.next(false)
        this.commonService.errorBooleanSubject.next(true);
        this.commonService.errorMessage.next(err.error.message);
      },
    });

    
  }

  // employee CheckOut
  checkOut() {
    this.commonService.loadingSubject.next(true)
    this.date = new Date();
    const dateString = this.date.toDateString();

    const data = {
      employeeId: this.employeeId,
      date: dateString,
      workedHoures:this.formatTime(this.workingTime)
    };

    this.employeeservice.checkOut(data).subscribe({
      next:(res) =>{
          if (res.success) {
            this.commonService.loadingSubject.next(false)
            clearInterval(this.timerInterval);
            this.checkInboolean = true
            this.commonService.successBooleanSubject.next(true);
            this.commonService.successMessage.next(res?.message);
            this.checkCheckined()
            clearInterval(this.breakTimerInterval);
            this.breakBoolean = true

          } else {
            this.commonService.loadingSubject.next(false)
            this.commonService.errorBooleanSubject.next(true);
            this.commonService.errorMessage.next(res.message)
          }
      },
      error:(err)=>{
          this.commonService.loadingSubject.next(false)
          this.commonService.errorBooleanSubject.next(true);
          this.commonService.errorMessage.next(err.error.message);
      }
    })
  }

  // Time Formated to 00h 00m 00s
  formatTime(ms: number): string {
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / (1000 * 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return `${hours}h ${minutes}m ${seconds}s`;
  }


  // get employee details
  getEmplyee() {
    const token = this.commonService.tockendecode();
    this.employeeId = token.employeeId;
    this.employeeName = token.name
  }


  // checking already checkined or Not
  checkCheckined() {
    this.employeeservice.checkCheckined(this.date, this.employeeId).subscribe({
      next: (res) => {
        if (res.success) {
          this.checkInboolean = false;
          this.data = res.data;
          const [datePart, timePart] = this.data.checkIn.split(', ');
          const [month, day, year] = datePart.split('/');
          const [time, period] = timePart.split(' ');
          const [hours, minutes, seconds] = time.split(':');
          const date = new Date(
            year,
            month - 1,
            day,
            period === 'PM' && hours !== '12' ? +hours + 12 : period === 'AM' && hours === '12' ? 0 : +hours,
            +minutes,
            +seconds
          );
          const timeInmilli = date.getTime();

          this.timerInterval = setInterval(() => {
            this.workingTime = Date.now() - timeInmilli;
          }, 1000);
        } else {
          this.checkInboolean = true;
          this.data = res.data;
        }
      },
      error: (err) => {
        this.commonService.errorBooleanSubject.next(true);
        this.commonService.errorMessage.next(err.error.message);
      },
    });
  }

  // taking break
  takeBreak(){
    this.commonService.loadingSubject.next(true)
    this.breakStart = Date.now();
    this.date = new Date();
    const dateString = this.date.toDateString();

    const data ={
      employeeId:this.employeeId,
      date:dateString
    }
    
    this.employeeservice.takeBreak(data).subscribe({
      next:(res) =>{
        if(res.success){
          this.commonService.loadingSubject.next(false)
          this.breakBoolean=false
          this.commonService.successBooleanSubject.next(true)
          this.commonService.successMessage.next(res.message)
          this.breakTimerInterval = setInterval(() => {
            this.breakTime = Date.now() - this.breakStart;
          }, 1000);
        } else {
          this.commonService.loadingSubject.next(false)
          this.commonService.errorBooleanSubject.next(true)
          this.commonService.errorMessage.next(res.message)
        }
      },
      error:(err)=>{
        this.commonService.loadingSubject.next(false)
        this.commonService.errorBooleanSubject.next(true)
        this.commonService.errorMessage.next(err.error.message)
      }
    })

    

  }

  // previous break check
  checkBreak(){
    this.employeeservice.checkBreak(this.date, this.employeeId).subscribe({
      next:(res)=>{
        
        if(res.success){
          this.breakBoolean=false
          const data = res.data?.break?.[res.data?.break?.length-1]
          
          const [datePart, timePart] = data?.breakStart.split(', ');
          const [month, day, year] = datePart.split('/');
          const [time, period] = timePart.split(' ');
          const [hours, minutes, seconds] = time.split(':');
          const date = new Date(
            year,
            month - 1,
            day,
            period === 'PM' && hours !== '12' ? +hours + 12 : period === 'AM' && hours === '12' ? 0 : +hours,
            +minutes,
            +seconds
          );
          const timeInmilli = date.getTime();

          this.breakTimerInterval = setInterval(() => {
            this.breakTime = Date.now() - timeInmilli;
          }, 1000);
        }
      },
      error:(err)=>{
        this.commonService.errorBooleanSubject.next(true)
        this.commonService.errorMessage.next(err.error.message)
      }
    })
  }


  // previous break check end
  breakEnd(){
    this.commonService.loadingSubject.next(true)
    this.date = new Date();
    const dateString = this.date.toDateString();

    const data = {
      employeeId: this.employeeId,
      date: dateString,
      workedHoures:this.formatTime(this.breakTime)
    };

    this.employeeservice.breakEnd(data).subscribe({
      next:(res) =>{
          if (res.success) {
            this.commonService.loadingSubject.next(false)
            clearInterval(this.breakTimerInterval);
            this.breakBoolean = true
            this.commonService.successBooleanSubject.next(true);
            this.commonService.successMessage.next(res?.message);
          } else {
            this.commonService.loadingSubject.next(false)
            this.commonService.errorBooleanSubject.next(true);
            this.commonService.errorMessage.next(res.message)
          }
      },
      error:(err)=>{
          this.commonService.loadingSubject.next(false)
          this.commonService.errorBooleanSubject.next(true);
          this.commonService.errorMessage.next(err.error.message);
      }
    })
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
    clearInterval(this.breakTimerInterval);
  }
}
