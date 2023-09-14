import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BggService {
  // Define GitHub API url
  apiUrl = "https://boardgamegeek.com/xmlapi2";

  constructor(private http: HttpClient) {}

  // This fails because BGG is actually idiotic and doesn't pass back a CORS header.
  // getOwnedGames() {

  //   const httpOptions = {
  //   headers: new HttpHeaders({
  //     "Access-Control-Allow-Origin":"https://boardgamegeek.com",
  //   })
  // };

  //   return this.http.get(`${this.apiUrl}/collection?username=elijahscherz&own=1`, httpOptions).pipe(retry(3), catchError(() => {
  //     return throwError("Error retrieving games.");
  //   }));
  // }

  // getRatedGames() { }
}
