import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

export const gouserhomeGuard: CanActivateFn = (route, state) => {
  
  const token =inject(CommonServiceService).tockendecode()
  if(token && !token?.type || token?.type){
    return true
    
  } else if (token && token?.type ){
    inject(Router).navigate(['admin'])
    return true
  } else {
    inject(Router).navigate(['/'])
    return true
  }
};
