import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faJira } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  faCircle = faCircle;
  faJira = faJira;
  faBootstrap = faBootstrap;
  faAngular = faAngular;
  faPython = faPython;
  faNodeJs = faNodeJs;
  faGithub = faGithub;

  gists: Array<Object> = new Array<Object>();
  repos;
  
  constructor(private githubService: GithubService) { }

  ngOnInit() {

    let gistsObservable = this.githubService.getGists();

    gistsObservable.subscribe((gists: any) => {
      gists.forEach((gist: any) => {
        
        // Loop through the files to get the rawUrl and the code
        for(let key of Object.keys(gist.files)) {
          let rawUrl = gist.files[key].raw_url;
          let newGistObj = gist;
          this.githubService.getGistCode(rawUrl).subscribe(value => {
            newGistObj.content = value;
            this.gists.push(newGistObj);
          });
        }
      });
    })

    this.repos = this.githubService.getRepos();
  }

}
