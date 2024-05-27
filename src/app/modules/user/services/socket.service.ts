import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { CommonServiceService } from 'src/app/services/common-service.service';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;

  constructor(private commonService:CommonServiceService) { }

  connectWithSocket(emplyee:any){
        this.socket = io(environment.socketApi,{
          auth: {
            username: emplyee,
          },
        });

        this.socket.on('notification', (notification: any) => {
          console.log('Notification received: ', notification);
          this.commonService.notificationBooleanSubject.next(true)
          notification.employeeName = emplyee
          this.commonService.notificationMessage.next(notification)
        });

        this.socket.on('disconnect', (reason: string) => {
          console.log('Disconnected: ', reason);
        });
  }

  
  disconnectSocket(): void {
    if (this.socket) {
      this.socket.disconnect();
      console.log('Socket disconnected');
    }
  }

  ngOnDestroy(): void {
    this.disconnectSocket();
  }
}
