import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';

export const goadminhomeGuard: CanActivateFn = (route, state) => {

  const token =inject(CommonServiceService).tockendecode()
  if(token && token?.type){
    return true
    
  } else if (token && !token?.type){
    inject(Router).navigate(['employee'])
    return true

  } else {
    inject(Router).navigate(['/'])
    return true
  }
};
