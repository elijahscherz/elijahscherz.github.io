import { Component, OnInit, Input } from "@angular/core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faJira } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
  faCircle = faCircle;
  faJira = faJira;
  faBootstrap = faBootstrap;
  faAngular = faAngular;
  faPython = faPython;
  faNodeJs = faNodeJs;
  faGithub = faGithub;
  faRaspberryPi = faRaspberryPi;

  expanded: Boolean = false;
  @Input() name: String = "";
  @Input() description: String = "";
  @Input() icon: String = "";

  isMobile: Boolean = false;

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
  }
}
