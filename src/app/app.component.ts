import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationStart, NavigationCancel, NavigationEnd, RoutesRecognized } from '@angular/router/index';
import { NavigationStartService } from './services/navigation-start.service';


export interface Message {
    author: string;
    message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private router:Router, 
        private navigationStartService:NavigationStartService) {
    }

    ngOnInit() {
        this.router.events.forEach(navigation => {            
            if(navigation instanceof NavigationStart) {                
                this.navigationStartService.checkStartNavigation();
            }
        });
    }
    
}
