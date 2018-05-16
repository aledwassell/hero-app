import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LettersComponent } from './letters/letters.component';
import { CheeseComponent } from './cheese/cheese.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroModule } from './hero/hero.module';
import { HeroesComponent } from './heroes/heroes.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LettersComponent,
    CheeseComponent,
    PageNotFoundComponent,
    HeroesComponent,
    UserDetailComponent,
    MessagesComponent,
    NavbarComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HeroModule,
      //Important to remeber the order of the AppRoutingModule
      AppRoutingModule,
      ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
