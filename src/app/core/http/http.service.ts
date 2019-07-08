import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class HttpService {
  constructor(private https: HttpClient) { }

  public get<T>(path: string): Observable<T> {
    return <Observable<T>>(
      this.https
        .get(`${environment.fakeAPI}/${path}/`, {
          headers: this.getHeaders()
        })
        .pipe(catchError(this.handleError))
    );
  }

  public post<T>(path: string, payload: any = {}): Observable<T> {

    return <Observable<T>>(
      this.https
        .post(`${environment.fakeAPI}/${path}`, payload, {
          headers: this.getHeaders()
        })
        .pipe(catchError(this.handleError))
    );
  }



  private getHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error.error);
  }
}
