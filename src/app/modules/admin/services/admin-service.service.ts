import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  api = environment.api

  addEmployee(emplyeeData:addEmployeeData):Observable<any>{
    return this.http.post(`${this.api}/admin/addEmplyee`, emplyeeData)
  }

  showAllEmployees():Observable<any>{
    return this.http.get(`${this.api}/admin/showEmployees`)
  }

  blockAndUnblockEmployee(userId:any):Observable<any>{
    return this.http.patch(`${this.api}/admin/changeStatus`, {userId})
  }


}


interface addEmployeeData {
  username ?: string;
  phoneNumber ?: number;
  email ?: string;
}