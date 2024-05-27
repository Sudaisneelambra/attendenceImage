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
    console.log(data);
    return this.http.post(`${this.api}/employee/checkIn`,data)
  }
  

}
