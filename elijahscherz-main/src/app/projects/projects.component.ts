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

    // Method to test if it was working
    // this.githubService.getUsers().subscribe(users => {
    //   console.log(users);
    // })

    console.log(this.githubService.getGistCode("https://gist.githubusercontent.com/elijahscherz/dae9e2c68d1877940f04d8f9e2e9f0d0/raw/7e28ff41f035a9a558356b16eb35f641a446e97f/hover_animation"));

    this.githubService.getGistCode("https://gist.githubusercontent.com/elijahscherz/dae9e2c68d1877940f04d8f9e2e9f0d0/raw/7e28ff41f035a9a558356b16eb35f641a446e97f/hover_animation").subscribe(value => {
      console.log(value);
    });

    let gistsObservable = this.githubService.getGists();
    console.log(gistsObservable);

    gistsObservable.subscribe((gists: Array<Object>) => {
      gists.forEach((gist: Object) => {
        
        // Loop through the files to get the rawUrl and the code
        for(let key of Object.keys(gist.files)) {
          let rawUrl = gist.files[key].raw_url;
          let newGistObj = gist;
          this.githubService.getGistCode(rawUrl).subscribe(value => {
            console.log(value);
            newGistObj.content = value;
            console.log(newGistObj.content);
            this.gists.push(newGistObj);
          });
        }
      });

      console.log(this.gists);
    })

    this.repos = this.githubService.getRepos();
  }

}
