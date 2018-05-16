import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
    selector: 'app-hero-list',
    template: `
        <h1>{{title}}</h1>
        hero name: {{hero.name}}
        <ul>
            <li *ngFor="let hero of heroes">
                <span >{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class HeroListComponent implements OnInit {
    title = 'Hero List';
    heroes = HEROES;
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor() { }

    ngOnInit() {
    }

}
