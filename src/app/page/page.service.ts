import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class PageService {
    private url: 'src/assets/users.json';
    constructor(private http: HttpClient) { }
    getData(): Observable<User[]> {
      return this.http.get<User[]>(this.url);
  }
}
