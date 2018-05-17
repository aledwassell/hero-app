import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { HttpClient } from "@angular/common/http";

export interface Cat {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private http: HttpClient) {
    getAllCats(): Observable<Cat[]> {
        return this.http.get<Cat[]>('https://jsonplaceholder.typicode.com/posts')
      }
      //https://malcoded.com/posts/angular-backend-express
  }
}
