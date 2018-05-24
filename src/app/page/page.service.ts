import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class PageService {
    private gitUrl: 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient) { }
    getData(): Observable<User[]> {
      return this.http.get<User[]>(this.gitUrl);
  }
}
