import { Component, OnInit } from '@angular/core';
import { User } from "./user"
import { PageService } from "./page.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {
  constructor(private pageService: PageService) { }
  users: User[];
  getUsers(): void {
      this.pageService.getUsers().subscribe(data => this.users = data);
  }
  ngOnInit() {
  }
}
