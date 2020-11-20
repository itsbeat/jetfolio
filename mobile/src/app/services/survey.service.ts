import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

const API_URL = environment.API_URL + "/resource";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  answers;
  surveyResult;

  constructor(
    private http: HttpClient
  ) {
    this.answers = [];
  }

  save(answers) {
    return new Promise((resolve, reject) => {
      let resource = {
        answers: answers
      };

      this.http.post(API_URL + "/surveys", { resource })
        .subscribe((data: any) => {
          this.surveyResult = data.resource;
          resolve("ok");
        }, (err) => {
          reject(err.statusText);
        });
    });
  }

  getSurvey() {
    return this.surveyResult;
  }

  getQuestions() {
    return new Promise((resolve, reject) => {
      const filter = {
        visible: 1
      };

      const params = new HttpParams()
        .set("filter", JSON.stringify(filter));

      this.http.get(API_URL + "/questions", { params: params })
        .subscribe((data: any) => {
          resolve(data.resources.resources);
        }, (err: any) => {
          reject(err.statusText);
        });
    });
  }

  getAnswers() {
    return this.answers;
  }
}
