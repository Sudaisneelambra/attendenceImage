import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CommonServiceService } from './services/common-service.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(private commonservice:CommonServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token')
     request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    }) 


    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.body.expiry) {
            alert('JWT Expired. Please login again');
            this.commonservice.logOut();
          }
        }
      })
    );
  }
}
