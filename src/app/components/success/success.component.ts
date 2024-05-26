import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  message:any

  constructor(private commonservice:CommonServiceService) {}

  ngOnInit(): void {

    // success message getting through behavior subject
    this.commonservice.successMessage.subscribe(value=>{
      this.message=value
    })
  }
  
  // done for close the modal
  Done(){
    this.commonservice.successBooleanSubject.next(false)
    this.commonservice.successMessage.next('')
  }
}
