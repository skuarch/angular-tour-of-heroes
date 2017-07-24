import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AppRoutingModule } from './app.routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CreateHeroComponent } from './components/hero/create/create-hero.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WebSocketService } from './services/web-socket.service';
import { EntryPointComponent } from './components/entry-point/entry-point.component';
import { EntryPointService } from './services/entry-point.service';
import { DataSharedService } from './services/data-shared.service';
import { NavigationStartService } from './services/navigation-start.service';
import { HeroService } from './services/hero-service.service';
import { InternetService } from './services/internet.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    MenuComponent,
    CreateHeroComponent,
    NotFoundComponent,
    EntryPointComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    WebSocketService,
    EntryPointService,
    DataSharedService,
    NavigationStartService,
    HeroService,
    InternetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
