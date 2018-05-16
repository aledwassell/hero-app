import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    getUsers(): Observable<User[]> {
        this.messageService.add('User Service: fetched users')
        return of(USERS);
    }
  constructor(private messageService: MessageService) { }
}
