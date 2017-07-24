import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class HeroService {

  constructor(private http:Http) { }

  getHeroes():Promise<Hero[]> { 
    return this.http
        .get(environment.apiEndPoint + environment.uriHeroes)
        .toPromise()
        .then(response => response.json())
        .catch(error => {
          alert(error);
        });
  }

}
