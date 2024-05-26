import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  api = environment.api

  addEmployee(emplyeeData:addEmployeeData):Observable<any>{
    return this.http.post(`${this.api}/admin/addEmplyee`, emplyeeData)
  }


}


interface addEmployeeData {
  username ?: string;
  phoneNumber ?: number;
  email ?: string;
}