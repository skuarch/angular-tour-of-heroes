import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { LoaderComponent } from '../loader/loader.component';
import { MenuComponent } from '../menu/menu.component';
import { DataSharedService } from '../../services/data-shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  heroes: Hero[];
  loaderState = 'active';
  
  constructor(private dataSharedService:DataSharedService) { }

  ngOnInit() {
    this.heroes = this.dataSharedService.heroes;    
  }

}
