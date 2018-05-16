import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { UserService} from '../user.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    selectedUser: User;
    users: User[];
      constructor(private userService: UserService) { }
      getUsers(): void {
            this.userService.getUsers()
                .subscribe(users => this.users = users);
        }
      ngOnInit() {
          this.getUsers();
      }

    onSelect(user: User): void {
        this.selectedUser = user;
    }
}
