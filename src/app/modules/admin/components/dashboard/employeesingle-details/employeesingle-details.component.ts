import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../../../services/admin-service.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-employeesingle-details',
  templateUrl: './employeesingle-details.component.html',
  styleUrls: ['./employeesingle-details.component.css']
})
export class EmployeesingleDetailsComponent implements OnInit{

  id:any 
  data:any
  name:any
  phone:any
  constructor (private route:ActivatedRoute, private adminService:AdminServiceService, private commonService:CommonServiceService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.name = params['name'];
      this.phone = params['number']; 

      if(this.id){
        setTimeout(()=>{
          this.commonService.loadingSubject.next(true)
        },0)
          this.adminService.getSingleEmployeeDetail(this.id).subscribe({
            next:(res)=>{
              if(res.success) {
                this.data=res.data
                
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
    });
    
  }

  // time function for geting time
  timesplice(dt:any){
    if(dt){
      const [date, time] =dt?.split(', ')
      return time
    } else {
      return 'No Check Out'
    }
    
  }

}
