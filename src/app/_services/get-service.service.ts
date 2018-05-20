import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from '../message.service';

export interface Hero {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
    Hero = Hero;
  constructor(
      private http: HttpClient,
      private messageService: MessageService
  ) {
      getAllHeroes (); Observable<Hero[]> {
          return: this.http.get<Hero[]>('https://jsonplaceholder.typicode.com/posts')
      };
  }
}
