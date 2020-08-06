import { Component, OnInit } from '@angular/core';
import SkillsJson from '../../assets/data/skills.json';


@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.css']
})
export class HomeSkillsComponent implements OnInit {

  skills: Array<Object> = SkillsJson;

  constructor() {
    // TODO: shuffle skills array?
  }

  ngOnInit() {
  }

}
