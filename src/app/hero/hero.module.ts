import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-details.component';

import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
    HeroRoutingModule
  ],
  declarations: [
      HeroListComponent,
      HeroDetailComponent
  ]
})
export class HeroModule { }
