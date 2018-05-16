import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-details.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'heroes',  component: HeroListComponent },
    { path: 'hero', component: HeroDetailComponent },
    { path: '', redirectTo: '/hero', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
