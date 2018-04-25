import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService) {
    this.heroes$ = heroService.entities$;
  }

  ngOnInit() {
    this.getHeroList();
  }

  getHeroList() {
    this.heroService.getAll();
  }

  addHero(hero: Hero) {
    this.heroService.add(hero);
  }

  deleteHero(hero: Hero) {
    this.heroService.delete(hero.id);
  }

  updateHero(hero: Hero) {
    this.heroService.update(hero);
  }
}
