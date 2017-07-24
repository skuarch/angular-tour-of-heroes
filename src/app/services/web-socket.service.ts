import { Injectable } from '@angular/core';
import { DataSharedService } from '../services/data-shared.service';

@Injectable()
export class WebSocketService {

  isWebSocketOpen: boolean = false;

  constructor(private dataSharedService:DataSharedService) { }

    public openSocket(url):void { 
        let ws = new WebSocket(url);

        if(ws) {
            
          ws.addEventListener('open', event => {
              console.log('web socket connected');
              this.isWebSocketOpen = true;
          });

          ws.addEventListener('close', event => {
              console.log('web socket disconnected');
              this.isWebSocketOpen = false;
          });

          ws.addEventListener('error', event => {
              console.log('web socket error');              
          });

          ws.addEventListener('message', event => {
            let message = JSON.parse(event.data);
            switch(message.type) {
                 case 'hero':                 
                 this.dataSharedService.heroes.push(message.content);
                 break;
             }
          });
        } else {
          alert('error in web socket');
        }
    }

}
 