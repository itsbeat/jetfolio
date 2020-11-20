import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

const API_URL = environment.API_URL + "/resource";

function timestampToUTC(date) {
  let timestamp = date.getTime();

  let localOffset = (-1) * date.getTimezoneOffset() * 60000;

  return new Date(timestamp + localOffset);
}

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  sessions;

  constructor(
    private profileService: ProfileService,
    private http: HttpClient,
    private router: Router
  ) {}

  getSessionById(planId, sessionId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.profileService.getPlanDetails(planId)
        .then((plan) => {
          let searchedSession;

          plan.sessions.map((session, index) => {
            if (session.id == sessionId) {
              session.index = index + 1;
              searchedSession = session;
            }
          });

          searchedSession.sessions_number = plan.sessions_number;

          resolve(searchedSession);
        }, (err) => {
          this.router.navigate(['/coaching-paths', {}]);
          reject(err);
        });
    });
  }

  getSessionActionPlanById(sessionId) {
    return this.sessions[sessionId].action_plan;
  }

  saveAction(sessionId, resource) {
    return new Promise((resolve, reject) => {
      resource.session = {
        id: sessionId
      };

      resource.deadline = timestampToUTC(resource.deadline);

      console.log(resource);

      this.http.post(API_URL + '/actions', { resource })
        .subscribe((data) => {
          console.log(data);
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveSession(resource) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + "/sessions", { resource })
        .subscribe((data) => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }
}
