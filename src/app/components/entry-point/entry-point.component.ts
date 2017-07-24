import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';
import { environment } from '../../../environments/environment';
import { EntryPointService } from '../../services/entry-point.service';
import { Hero } from '../../model/hero';
import { HeroService } from '../../services/hero-service.service';
import { DataSharedService } from '../../services/data-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-point',
  templateUrl: './entry-point.component.html',
  styleUrls: ['./entry-point.component.css']
})
export class EntryPointComponent implements OnInit {

  loaderState:String = 'active';
  loading:boolean = true;

  constructor(
    private webSocketService: WebSocketService, 
    private heroService: HeroService,
    private router: Router,
    private dataSharedService: DataSharedService) { 
  }

  ngOnInit() {
       this.webSocketService.openSocket(environment.webSocketUrl);
       this.heroService
        .getHeroes()
        .then(heroes => {          
            this.dataSharedService.heroes = heroes;
            this.loaderState = 'inactive';
            this.loading = false;            
            this.router.navigate(['/home']);
        })
        .catch(error => {
            alert(error);
        });
  }

}
