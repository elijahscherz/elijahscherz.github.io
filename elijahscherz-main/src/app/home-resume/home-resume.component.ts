import { Component, OnInit } from "@angular/core";
import ExperiencesJson from "../../assets/data/experiences.json";

@Component({
  selector: "app-home-resume",
  templateUrl: "./home-resume.component.html",
  styleUrls: ["./home-resume.component.css"],
})
export class HomeResumeComponent implements OnInit {
  experiences: Array<Object> = ExperiencesJson;

  constructor() {}

  ngOnInit() {}
}
