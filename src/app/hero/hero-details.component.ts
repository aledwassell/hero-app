import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-hero-details',
    template: `
        <h1>{{title}}</h1>
    `
})
export class HeroDetailComponent implements OnInit {
    title = 'Hero Details';
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
    }

}
