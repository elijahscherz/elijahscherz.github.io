import { Component, OnInit } from '@angular/core';
import GamesJson from '../../assets/data/games.json';

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.css']
})
export class BoardgamesComponent implements OnInit {

  games: Array<Object> = GamesJson;

  constructor() { }

  ngOnInit() {

    // Randomize the game page display
    this.games.sort(() => Math.random() - 0.5);

  }

}
