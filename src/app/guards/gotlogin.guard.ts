import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

export const gotloginGuard: CanActivateFn = (route, state) => {

  const tocken= inject(CommonServiceService).tockendecode();

  if(!tocken) {
    return true

  } else if (tocken && !tocken?.type ) {
    inject(Router).navigate(['employee'])

  } else if (tocken && tocken?.type){
    inject(Router).navigate(['admin'])

  }
  
  return true;
};
