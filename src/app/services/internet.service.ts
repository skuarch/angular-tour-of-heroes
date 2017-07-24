import { Injectable } from '@angular/core';

@Injectable()
export class InternetService {

  private isConnected:boolean = false;

  constructor() {
    this.checkStatus(); 
    this.addInternetListeners();
  }

  private addInternetListeners() {

    window.ononline = (ev: any): any => {
      console.log('entro a esta madre 0');  
    }
    window.onoffline = (event: any): any => {
      console.log('entro a esta madre 1');  
    }
    window.addEventListener('online', event => {
      console.log('entro a esta madre 2');
      this.checkStatus();
    });
    window.addEventListener('offline', event => {
      console.log('entro a esta madre 3');
      this.checkStatus();
    });
    
  }

  clientIsConnected(): boolean {    
    return this.isConnected;
  }

  private checkStatus(): boolean {    
  
    if(navigator.onLine) {
      this.isConnected = true;
    } else {
      this.isConnected = false;
    }
    
    return this.isConnected;

  }

}
