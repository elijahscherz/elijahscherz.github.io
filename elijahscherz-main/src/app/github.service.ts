import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  // Define GitHub API url
  apiUrl = "https://api.github.com/users/elijahscherz";

  constructor(private http: HttpClient) {}

  getGists() {
    return this.http.get(`${this.apiUrl}/gists`);
  }

  getGistCode(rawUrl) {
    return this.http.get(rawUrl, { responseType: "text" });
  }

  getRepos() {
    return this.http.get(`${this.apiUrl}/repos`);
  }
}
