import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

      
  message:any
  constructor(private commonService:CommonServiceService, private router:Router) {}
  
  ngOnInit(): void {

    // error message getting through behavior subject
    this.commonService.errorMessage.subscribe((value)=>{
      this.message=value
    })

  }

  // the okey button for read the error and ok and go to home
  okey(){
    this.commonService.errorBooleanSubject.next(false)
    this.commonService.errorMessage.next('')
    this.router.navigate(['/'])
  }
}
