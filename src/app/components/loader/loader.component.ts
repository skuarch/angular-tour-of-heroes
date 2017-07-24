import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [
    trigger('loaderState', [
      state('inactive', style({        
        opacity: 0
      })),
      state('active',   style({
        opacity: 1
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class LoaderComponent implements OnInit, OnChanges {
  
  loading:boolean = true;

  @Input()
  public loaderState:String = 'active';

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['loaderState'].currentValue === 'active') {
      this.loading = true;
    } else {
      this.loading = false;
    }
  }

}
