import { Component, OnInit } from "@angular/core";
declare var $: any;
declare var Trianglify: any;

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.css"],
})
export class SplashComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var pattern = Trianglify({
      width: window.screen.width,
      height: window.screen.height,
    });
    var splash = document.getElementById("mainSplash");
    var gradientString =
      "linear-gradient(to bottom,rgba(22, 22, 22, 0.3) 0,rgba(22, 22, 22, 0.7) 85%,#161616 100%), ";
    splash.style.backgroundImage =
      gradientString + "url(" + pattern.png() + ")";
  }
}
