import { Component, OnInit } from '@angular/core';
import GamesJson from '../../assets/data/games.json';

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.css']
})
export class BoardgamesComponent implements OnInit {

  games: Array<Object> = GamesJson;
  isMobile: boolean = false;

  constructor() { }

  onClickAlpha() {
    this.games.sort((a, b) => {
      return a.name.text.localeCompare(b.name.text);
    });
  }
  onClickGeek() {
    this.games.sort((a, b) => {
      return a.stats.rating.average.value - b.stats.rating.average.value;
    }).reverse();
  }
  onClickRating() {
    // this.games.sort((a, b) => {
    //   return a.numplays - b.numplays;
    // }).reverse();
  }
  onClickPlays() {
    this.games.sort((a, b) => {
      return a.numplays - b.numplays;
    }).reverse();
  }

  ngOnInit() {

    // Fairly simple mobile detection method
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.isMobile = true;
    }

    // Randomize the game page display to start
    this.games.sort(() => Math.random() - 0.5);
  }

}
