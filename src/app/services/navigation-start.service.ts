import { Injectable } from '@angular/core';
import { DataSharedService } from '../services/data-shared.service';
import { WebSocketService } from '../services/web-socket.service';
import { InternetService } from '../services/internet.service';
import { HeroService } from '../services/hero-service.service';
import { environment } from '../../environments/environment';

@Injectable()
export class NavigationStartService {

  constructor(
    private internetService: InternetService,
    private heroService: HeroService,
    private dataSharedService:DataSharedService,
    private webSocketService: WebSocketService) {

  }

  checkStartNavigation() {

    if(!this.webSocketService.isWebSocketOpen){
      this.webSocketService.openSocket(environment.webSocketUrl);
    }

    if(!this.dataSharedService.dataSharedIsLoad) {
      this.heroService.getHeroes().then((heroes: any) => {   
        heroes.forEach(element => {
          this.dataSharedService.heroes.push(element);          
        });
        this.dataSharedService.dataSharedIsLoad = true;
      });
    }

  }

}
