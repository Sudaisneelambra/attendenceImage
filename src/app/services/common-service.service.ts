import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
  loadingSubject= new BehaviorSubject<boolean>(false)
  confirmBooleanSubject= new BehaviorSubject<boolean>(false)
  successBooleanSubject= new BehaviorSubject<boolean>(false)
  errorBooleanSubject= new BehaviorSubject<boolean>(false)


  confirmMessage= new BehaviorSubject<string>('')
  data= new BehaviorSubject<object>({})
  successMessage= new BehaviorSubject<string>('')
  errorMessage= new BehaviorSubject<string>('')


  tockendecode() {

    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
  }

}
