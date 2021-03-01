import { Component, OnInit } from '@angular/core';
import GamesJson from '../../assets/data/games.json';
import BGStatsJson from '../../assets/data/BGStatsExport.json';
// import '../../assets/js/shine.js';

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
  stats: any = BGStatsJson;
  isMobile: boolean = false;
  showGames: boolean = true;
  showExpansions: boolean = false;
  sortMethod: string = "alpha";
  options: any;
  theme: any;

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
      if (game.subtype === "boardgame" && this.showGames) {
        return true;
      }

      if (game.subtype === "boardgameexpansion" && this.showExpansions) {
        return true;
      }

      return false;
    });

    // Apply the current sorting method
    // TODO: change this to enums
    if (this.sortMethod === "alpha") {
      this.onClickAlpha();
    }
    else if (this.sortMethod === "geek") {
      this.onClickGeek();
    }
    else if (this.sortMethod === "rating") {
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

    // PLAY TIME CHART

    // this.theme = "shine";

    let xAxisLabels = [];
    let timeData = [];
    let playData = [];

    // PREPARE DATA FOR CHART //

    let [currMonth, currDay, currYear] = new Date().toLocaleDateString("en-US").split("/");

    // First recorded plays are in July, we begin there
    let [mString, dString, yString] = new Date(2020, 7, 1).toLocaleDateString("en-US").split("/");

    let m = Number(mString);
    let d = Number(dString);
    let y = Number(yString);

    // Round the current day to either the middle of the month or the end
    if (Number(currDay) > 15) {
      currDay = "30";
    }
    else {
      currDay = "1";
    }

    // Initialize vectors before populating them further
    xAxisLabels.push("7/1/2020");
    timeData.push(0);
    playData.push(0);

    while (m < Number(currMonth) || d < Number(currDay) || y < Number(currYear)) {

      // Update day first
      // If we are using 1 currently, switch to end of the month
      if (d === 1) {
        d = 30;
      }
      else {

        // If we are back at the beginning of the month...
        d = 1;

        // Update the month and potentially the year
        if (m === 12) {
          m = 1;
          y += 1;
        }
        else {
          m += 1;
        }
      }

      // Add entries to vectors
      xAxisLabels.push(String(m) + "/" + String(d) + "/" + String(y));
      timeData.push(0);
      playData.push(0);
    }

    // Aggregate play and time data from recorded plays
    for (let play of this.stats.plays) {
      const date = new Date(play.playDate);
      // const label = date.getMonth() + 1 + "/" + date.getFullYear();
      let [month, day, year] = date.toLocaleDateString("en-US").split("/");

      if (day === "31") {
        console.log(month);
        console.log(play);
      }

      // Round the date of this play to the needed week
      if (Number(day) > 15) {
        day = "30";
      }
      else {
        day = "1";
      }

      const label = month + "/" + day + "/" + year;

      // Apply updates
      timeData[xAxisLabels.indexOf(label)] += play.durationMin;
      playData[xAxisLabels.indexOf(label)] += 1;

      // If we haven't seen this month yet, add new label and start
      // time aggregation
      // if (!xAxisLabels.includes(label)) {
      //   xAxisLabels.push(label);
      //   timeData.push(parseInt(play.durationMin));
      //   playData.push(1);
      // }
      // else {
      //   // Add the time from this play to the total time of the month
      //   timeData[xAxisLabels.indexOf(label)] += parseInt(play.durationMin);
      //   playData[xAxisLabels.indexOf(label)] += 1;
      // }
    }

    // Reverse each array so they display chronologically
    // xAxisLabels = xAxisLabels.reverse();
    // timeData = timeData.reverse();
    // playData = playData.reverse();

    // Convert times to hours played
    for (let i = 0; i < timeData.length; i++) {
      timeData[i] = Math.ceil(timeData[i] / 60);
    }

    this.options = {
      legend: {
        data: ['Hours Played', 'Play Count'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisLabels,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Hours Played',
          type: 'bar',
          data: timeData,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'Play Count',
          type: 'bar',
          data: playData,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

}
