import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  api = environment.api

  checkIn(data:any):Observable<any>{
    return this.http.post(`${this.api}/employee/checkIn`,data)
  }

  checkCheckined(date:any,employeeId:any):Observable<any>{
    const dateString = date.toDateString();
    return this.http.get(`${this.api}/employee/checkCheckin?date=${dateString}&employeeId=${employeeId}`)
  }
  
  checkOut(data:any):Observable<any>{
    return this.http.post(`${this.api}/employee/checkOut`,data)
  }

  takeBreak(data:any):Observable<any>{
    return this.http.post(`${this.api}/employee/takeBreak`,data)
  }

  checkBreak(date:any,employeeId:any):Observable<any>{
    const dateString = date.toDateString();
    return this.http.get(`${this.api}/employee/breakCheck?date=${dateString}&employeeId=${employeeId}`)
  }

  breakEnd(data:any):Observable<any>{
    return this.http.post(`${this.api}/employee/breakEnd`,data)
  }

  requestForLeave(data:any):Observable<any>{
    return this.http.post(`${this.api}/employee/leaveRequest`,data)

  }

  getAttendance():Observable<any> {
    return this.http.get(`${this.api}/employee/getAttendance`)
  }

}
