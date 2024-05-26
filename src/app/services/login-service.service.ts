import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  api = environment.api;

  constructor( private http:HttpClient) { }

  userLogin(data:loginCredential):Observable<loginResponse>{
    return this.http.post<loginResponse>(`${this.api}/login`,data)
  }

}

interface loginResponse {
  success ?: boolean;
  message ?: string;
  data ?: any;
  token ?: any;
}

interface loginCredential {
  email ?: string;
  password ?: string;
  userType ?: string;
}
