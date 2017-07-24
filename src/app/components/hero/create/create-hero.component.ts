import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent }     from '../../menu/menu.component';
import { LoaderComponent }   from '../../loader/loader.component';

@Component({
  selector: 'app-create',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  @Input()
  public loaderState:String = 'active';

  constructor() { }

  ngOnInit() {
    this.loaderState = 'inactive';
  }

}
