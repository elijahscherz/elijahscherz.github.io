import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  gists;
  repos;


  constructor(private githubService: GithubService) { }

  ngOnInit() {

    // Method to test if it was working
    // this.githubService.getUsers().subscribe(users => {
    //   console.log(users);
    // })

    console.log(this.githubService.getGistCode("https://gist.githubusercontent.com/elijahscherz/dae9e2c68d1877940f04d8f9e2e9f0d0/raw/7e28ff41f035a9a558356b16eb35f641a446e97f/hover_animation"));

    this.githubService.getGistCode("https://gist.githubusercontent.com/elijahscherz/dae9e2c68d1877940f04d8f9e2e9f0d0/raw/7e28ff41f035a9a558356b16eb35f641a446e97f/hover_animation").subscribe(value => {
      // console.log(value);;
    })

    // This is an observable... can I make my own? I want to fetch all of the
    // information at runtime because that makes sense, so let's figure that out.
    this.gists = this.githubService.getGists();
    console.log(this.gists);

    this.repos = this.githubService.getRepos();
  }

}
