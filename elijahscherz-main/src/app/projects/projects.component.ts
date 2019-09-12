import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

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
