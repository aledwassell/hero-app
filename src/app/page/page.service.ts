import { Injectable } from '@angular/core';
import { User } from "./user";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {
    private url: 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient) { }

    getData(): Observable<User[]> {
      return this.http.get<User[]>(this.url);
    }
    getUsers() {
        return this.getData();
    }
}
