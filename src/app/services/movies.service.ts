import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  discoverUrl: string;
  popularUrl = 'discover/movie?sort_by=popularity.desc';
  constructor(private http: HttpClient) {
    const currentTime = new Date().toISOString().slice(0, 10);
    this.discoverUrl = `discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=${currentTime}`;
  }

  getMomentMovies(): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.discoverUrl}&api_key=${environment.apiKey}`).pipe(catchError(this.handleError));
  }

  getPopularMovies(page: number = 1): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${environment.apiUrl}${this.popularUrl}&page=${page}&api_key=${environment.apiKey}`).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
