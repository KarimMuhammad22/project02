import { Question } from "./../_Model/question";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  apiUrl="http://localhost:49444/api/CommunityQuestions";
  constructor(private http: HttpClient) {}
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  postQuestion(x) {
    return this.http.post(this.apiUrl, x);
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
