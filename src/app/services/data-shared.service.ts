import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

// this class is just a container, 
// don't put any logic here

@Injectable()
export class DataSharedService {   
    public dataSharedIsLoad: boolean = false;
    public heroes: Hero[] = [];
}