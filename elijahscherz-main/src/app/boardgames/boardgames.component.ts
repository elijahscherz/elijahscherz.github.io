import { Component, OnInit } from "@angular/core";
import { ColorHelper, ScaleType } from "@swimlane/ngx-charts";
import { Observable, of } from "rxjs";
// import 'bootstrap';
// import * as $ from 'jquery';
import GamesJson from "../../assets/data/games.json";
import BGStatsJson from "../../assets/data/BGStatsExport.json";

/**
 * Getting the boardgame JSON files -
 * For games.json:
 * https://www.boardgamegeek.com/xmlapi2/collection?username=elijahscherz&stats=1&own=1&excludesubtype=boardgameexpansion
 * https://www.boardgamegeek.com/xmlapi2/collection?username=elijahscherz&stats=1&own=1&subtype=boardgameexpansion
 * - Download this XML file
 * - Convert to JSON with: https://www.freeformatter.com/xml-to-json-converter.html (change the text field to just "text")
 * - Download it and save it as data/games.json
 * - Remove the characters before and after the list [] brackets
 *
 * For BGStatsExport.json:
 * - Export from local app
 */

@Component({
  selector: "app-boardgames",
  templateUrl: "./boardgames.component.html",
  styleUrls: ["./boardgames.component.css"],
})
export class BoardgamesComponent implements OnInit {
  games: Array<any> = BGStatsJson.games;
  stats: any = BGStatsJson;
  isMobile: boolean = false;
  showGames: boolean = true;
  showExpansions: boolean = false;
  sortMethod: string = "alpha";
  gamePlayData: Object = null;

  playOptions: any;
  dayOptions: any;
  playerOptions: any;
  theme: any;
  playLegend: any;

  multiSeries: any[] = [];

  fullGraphView: any[] = [3000, 450];

  colors: any;

  colorScheme = {
    domain: ["#A45482", "#6AB04C"],
  };

  constructor() {}

  ngOnInit() {
    this.colors = new ColorHelper("cool", ScaleType.Ordinal, [
      "Plays",
      "Hours",
    ]);

    // Fairly simple mobile detection method
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      this.isMobile = true;
    }

    this.generatePlayData();

    this.refreshListing();

    // Randomize the game page display to start
    this.games.sort(() => Math.random() - 0.5);

    this.getChartData().subscribe((data) => (this.multiSeries = data));
  }

  onClickAlpha() {
    this.sortMethod = "alpha";

    this.games.sort((a, b) => {
      // Sorts alphabetically! (localCompare)
      return a.name.localeCompare(b.name);
    });
  }

  // TODO: outdated
  onClickGeek() {
    this.sortMethod = "geek";

    this.games
      .sort((a, b) => {
        return a.stats.rating.average.value - b.stats.rating.average.value;
      })
      .reverse();
  }

  // TODO: outdated
  onClickRating() {
    this.sortMethod = "rating";

    this.games
      .sort((a, b) => {
        // If I haven't rated one of the games, then just use the average
        if (a.stats.rating.value === "N/A") {
          a.stats.rating.value = a.stats.rating.average.value;
        }

        if (b.stats.rating.value === "N/A") {
          b.stats.rating.value = b.stats.rating.average.value;
        }

        return a.stats.rating.value - b.stats.rating.value;
      })
      .reverse();
  }

  onClickPlays() {
    this.sortMethod = "plays";

    this.games
      .sort((a, b) => {
        // Check and make sure to set plays to 0 if there aren't any plays
        if (!(a.name in this.gamePlayData)) {
          this.gamePlayData[a.name] = 0;
        }

        if (!(b.name in this.gamePlayData)) {
          this.gamePlayData[b.name] = 0;
        }

        return this.gamePlayData[a.name] - this.gamePlayData[b.name];
      })
      .reverse();
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

  generatePlayData() {
    // Check if we have crunched these numbers yet or not
    if (this.gamePlayData === null) {
      this.gamePlayData = {};

      // Get the play data into memory
      // TODO: this seems slow as heck. Might just want to make a script that permanently records this info
      for (let play of this.stats.plays) {
        if (!(this.stats.games[play.gameRefId - 1].name in this.gamePlayData)) {
          this.gamePlayData[this.stats.games[play.gameRefId - 1].name] = 0;
        }

        this.gamePlayData[this.stats.games[play.gameRefId - 1].name] += 1;
      }
    }
  }

  refreshListing() {
    // First reset the entire listing
    this.games = BGStatsJson.games;

    // Filter based on what the user currently wants to view on the page
    this.games = this.games.filter((game) => {
      if (this.showGames && game.name in this.gamePlayData) {
        return true;
      }

      if (
        this.showExpansions &&
        game.isExpansion === 1 &&
        game.copies.length &&
        game.copies[0].statusOwned === 1
      ) {
        return true;
      }

      return false;
    });

    // Apply the current sorting method
    // TODO: change this to enums
    if (this.sortMethod === "alpha") {
      this.onClickAlpha();
    } else if (this.sortMethod === "geek") {
      // this.onClickGeek();
    } else if (this.sortMethod === "rating") {
      // this.onClickRating();
    } else {
      // Last available category is Plays
      this.onClickPlays();
    }
  }

  getChartData(): Observable<any> {
    // PLAY TIME CHART

    // this.theme = "shine";

    let xAxisLabels = [];
    let timeData = [];
    let playData = [];

    // PREPARE DATA FOR CHART //

    let [currMonth, currDay, currYear] = new Date()
      .toLocaleDateString("en-US")
      .split("/");

    // First recorded plays are in July, we begin there
    let [mString, dString, yString] = new Date(2020, 7, 1)
      .toLocaleDateString("en-US")
      .split("/");

    let m = Number(mString);
    let d = Number(dString);
    let y = Number(yString);

    // Round the current day to either the middle of the month or the end
    if (Number(currDay) > 15) {
      currDay = "30";
    } else {
      currDay = "1";
    }

    // Initialize vectors before populating them further
    xAxisLabels.push("7/1/2020");
    timeData.push(0);
    playData.push(0);

    while (
      m < Number(currMonth) ||
      d < Number(currDay) ||
      y < Number(currYear)
    ) {
      // Update day first
      // If we are using 1 currently, switch to end of the month
      if (d === 1) {
        d = 30;
      } else {
        // If we are back at the beginning of the month...
        d = 1;

        // Update the month and potentially the year
        if (m === 12) {
          m = 1;
          y += 1;
        } else {
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

      // Round the date of this play to the needed week
      if (Number(day) > 15) {
        day = "30";
      } else {
        day = "1";
      }

      const label = month + "/" + day + "/" + year;

      // Apply updates
      timeData[xAxisLabels.indexOf(label)] += play.durationMin;
      playData[xAxisLabels.indexOf(label)] += 1;
    }

    // Convert times to hours played
    for (let i = 0; i < timeData.length; i++) {
      timeData[i] = Math.ceil(timeData[i] / 60);
    }

    // Adjust legend for mobile rendering
    if (this.isMobile) {
      this.playLegend = {
        data: ["Hours Played", "Play Count"],
        align: "left",
        x: "center",
        y: "bottom",
      };
    } else {
      this.playLegend = {
        data: ["Hours Played", "Play Count"],
        align: "left",
        x: "20",
        y: "10",
      };
    }

    const series = [];
    for (let i = 0; i < xAxisLabels.length; ++i) {
      series.push({
        name: xAxisLabels[i],
        series: [
          { name: "Plays", value: playData[i] },
          { name: "Hours", value: timeData[i] },
        ],
      });
    }

    return of(series);

    this.playOptions = {
      title: {
        text: "Play Statistics",
        subtext: "Biweekly Plays and Hours",
        x: "center",
      },
      legend: this.playLegend,
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
          name: "Hours Played",
          type: "bar",
          data: timeData,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: "Play Count",
          type: "bar",
          data: playData,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate: (idx) => idx * 5,
    };

    // this.dayOptions = {
    //   title: {
    //     text: 'Day Statistics',
    //     x: 'center'
    //   },
    //   tooltip: {
    //     trigger: 'item',
    //     formatter: '{a} <br/>{b} : {c} ({d}%)'
    //   },
    //   legend: {
    //     x: 'center',
    //     y: 'bottom',
    //     data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    //   },
    //   calculable: true,
    //   series: [
    //     {
    //       name: 'area',
    //       type: 'pie',
    //       radius: [30, 110],
    //       roseType: 'area',
    //       data: [
    //         { value: 10, name: 'rose1' },
    //         { value: 5, name: 'rose2' },
    //         { value: 15, name: 'rose3' },
    //         { value: 25, name: 'rose4' },
    //         { value: 20, name: 'rose5' },
    //         { value: 35, name: 'rose6' },
    //         { value: 30, name: 'rose7' },
    //         { value: 40, name: 'rose8' }
    //       ]
    //     }
    //   ]
    // };

    // this.playerOptions = {
    //   title: {
    //     text: 'Player Statistics',
    //     x: 'center'
    //   },
    //   tooltip: {
    //     trigger: 'item',
    //     formatter: '{a} <br/>{b} : {c} ({d}%)'
    //   },
    //   legend: {
    //     x: 'center',
    //     y: 'bottom',
    //     data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    //   },
    //   calculable: true,
    //   series: [
    //     {
    //       name: 'area',
    //       type: 'pie',
    //       radius: [0, 120],
    //       roseType: 'area',
    //       data: [
    //         { value: 10, name: 'rose1' },
    //         { value: 5, name: 'rose2' },
    //         { value: 15, name: 'rose3' },
    //         { value: 25, name: 'rose4' },
    //         { value: 20, name: 'rose5' },
    //         { value: 35, name: 'rose6' },
    //         { value: 30, name: 'rose7' },
    //         { value: 40, name: 'rose8' }
    //       ]
    //     }
    //   ]
    // };
  }
}
