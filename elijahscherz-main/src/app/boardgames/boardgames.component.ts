import { Component, OnInit } from '@angular/core';
import GamesJson from '../../assets/data/games.json';

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.css']
})
export class BoardgamesComponent implements OnInit {

  // https://www.boardgamegeek.com/xmlapi2/collection?username=elijahscherz&stats=1&own=1&excludesubtype=boardgameexpansion
  // https://www.boardgamegeek.com/xmlapi2/collection?username=elijahscherz&stats=1&own=1&subtype=boardgameexpansion
  // Download this XML file
  // Convert to JSON with: https://www.freeformatter.com/xml-to-json-converter.html (change the text field to just "text")
  // Download it and save it as data/games.json
  // Remove the characters before and after the list [] brackets
  games: Array<any> = GamesJson;
  isMobile: boolean = false;
  showGames: boolean = true;
  showExpansions: boolean = false;
  sortMethod: string = "alpha";

  constructor() { }

  onClickAlpha() {
    this.sortMethod = "alpha";

    this.games.sort((a, b) => {
      // Sorts alphabetically! (localCompare)
      return a.name.text.localeCompare(b.name.text);
    });
  }

  onClickGeek() {
    this.sortMethod = "geek";

    this.games.sort((a, b) => {
      return a.stats.rating.average.value - b.stats.rating.average.value;
    }).reverse();
  }

  onClickRating() {
    this.sortMethod = "rating";

    this.games.sort((a, b) => {

      // If I haven't rated one of the games, then just use the average
      if (a.stats.rating.value === "N/A") {
        a.stats.rating.value = a.stats.rating.average.value;
      }

      if (b.stats.rating.value === "N/A") {
        b.stats.rating.value = b.stats.rating.average.value;
      }

      return a.stats.rating.value - b.stats.rating.value;
    }).reverse();
  }

  onClickPlays() {
    this.sortMethod = "plays";

    this.games.sort((a, b) => {
      return a.numplays - b.numplays;
    }).reverse();
  }

  onClickBoardGames() {
    // Toggle, then refresh the view
    this.showGames = !this.showGames;
    this.refreshListing();
  }

  onClickExpansions() {
    // Toggle, then refresh
    this.showExpansions = !this.showExpansions;
    this.refreshListing();
  }

  refreshListing() {

    // First reset the entire listing
    this.games = GamesJson;

    // Filter based on what the user currently wants to view on the page
    this.games = this.games.filter(game => {
      if(game.subtype === "boardgame" && this.showGames) {
        return true;
      }

      if(game.subtype === "boardgameexpansion" && this.showExpansions) {
        return true;
      }
      
      return false;
    });

    // Apply the current sorting method
    // TODO: change this to enums
    if(this.sortMethod === "alpha") {
      this.onClickAlpha();
    }
    else if(this.sortMethod === "geek") {
      this.onClickGeek();
    }
    else if(this.sortMethod === "rating") {
      this.onClickRating();
    }
    else {
      // Last available category is Plays
      this.onClickPlays();
    }
    
      
  }

  ngOnInit() {

    // Fairly simple mobile detection method
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.isMobile = true;
    }

    this.refreshListing();

    // Randomize the game page display to start
    this.games.sort(() => Math.random() - 0.5);
  }

}
