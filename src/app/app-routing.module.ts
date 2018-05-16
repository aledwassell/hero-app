import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LettersComponent } from './letters/letters.component';
import { CheeseComponent } from './cheese/cheese.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HeroesComponent} from './heroes/heroes.component';

const routes: Routes = [
    {path: 'letters', component: LettersComponent },
    {path: 'cheese', component: CheeseComponent },
    {path: 'allHeroes', component: HeroesComponent },
    {path: 'hero', loadChildren: './hero/hero.module#HeroModule'},
    {path: '', redirectTo: '/letters', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
