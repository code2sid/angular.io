import { Component, OnInit } from '@angular/core';
import { Hero } from '../Model/hero';
import { Heroes } from '../Model/mock-heros'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  // hero:Hero= {id:1,name:"DeadPool"};
  heroes = Heroes;
  selectedHero: Hero;
  onselect(hero: Hero) :void{
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
