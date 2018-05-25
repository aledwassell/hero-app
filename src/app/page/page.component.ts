import { Component, OnInit } from '@angular/core';
import { PageService } from "./page.service";
import { User } from "./user"

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {
  constructor(private pageService: PageService) { }
  users: User[];
  ngOnInit() {
      this.getUsers();
  }
  getUsers(): void {
      this.pageService.getData()
          .subscribe(data => console.log(data));
  }

}
