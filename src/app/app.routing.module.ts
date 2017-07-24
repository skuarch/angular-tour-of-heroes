import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './components/home/home.component';
import { CreateHeroComponent }  from './components/hero/create/create-hero.component';
import { NotFoundComponent }  from './components/not-found/not-found.component';
import { EntryPointComponent }  from './components/entry-point/entry-point.component';

const routes: Routes = [
  { path: '', redirectTo: '/loader', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'hero/create',  component: CreateHeroComponent },
  { path: 'loader',  component: EntryPointComponent },


  { path: '**',  component: NotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}