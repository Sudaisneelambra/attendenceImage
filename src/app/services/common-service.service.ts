import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor( private router:Router, private http:HttpClient) { }

  loadingSubject= new BehaviorSubject<boolean>(false)
  confirmBooleanSubject= new BehaviorSubject<boolean>(false)
  successBooleanSubject= new BehaviorSubject<boolean>(false)
  errorBooleanSubject= new BehaviorSubject<boolean>(false)
  notificationBooleanSubject= new BehaviorSubject<boolean>(false)



  confirmMessage= new BehaviorSubject<string>('')
  data= new BehaviorSubject<object>({})
  successMessage= new BehaviorSubject<string>('')
  errorMessage= new BehaviorSubject<string>('')
  notificationMessage= new BehaviorSubject<{}>({})

  api= environment.api

  tockendecode() {

    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
  }


  getAttendence():Observable<any>{
    return this.http.get(`${this.api}/getAttendence`)
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
