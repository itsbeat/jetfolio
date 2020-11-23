import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth-service.service';
import { SurveyService } from '../services/survey.service';
import { environment } from '../../environments/environment';

const BASE_URL = environment.API_URL;
const API_URL = BASE_URL + '/resource';
const ACT_URL = API_URL + '/act';

const indexToHours = {
  1: 8,
  2: 10,
  3: 14,
  4: 16
};

function timestampToUTC(dateObject) {
  const date = new Date(dateObject.date);

  let time = date.getTime();
  time += indexToHours[dateObject.hour] * 60 * 60 * 1000;

  const localOffset = (-1) * date.getTimezoneOffset() * 60000;

  return new Date(time + localOffset);
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userPlans = null;
  planId: number;
  sessionId: number;
  creatingNewPath = false;

  newPath: any = {
    coach: {},
    dates: [],
    survey: {},
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private surveyService: SurveyService,
    private router: Router
  ) {}

  getCoachingPaths() {
    return new Promise((resolve, reject) => {
      const loggedUser = this.authService.getLoggedUser();

      const filter = {
        user_id: loggedUser.id
      };

      const params = new HttpParams()
        .set('filter', JSON.stringify(filter));

      this.http.get(API_URL + '/coachingplans', { params })
        .subscribe((data: any) => {
          this.userPlans = data.resources.resources;

          resolve(this.userPlans);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPlanDetails(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + '/coachingplans/' + id)
        .subscribe((data: any) => {
          resolve(data.resource);
        }, (err) => {
          this.router.navigate(['/coaching-paths', {}]);
          reject(err);
        });
    });
  }

  getCreatingNewPath() {
    return this.creatingNewPath;
  }

  getNewPath() {
    return this.newPath;
  }

  getCurrentCoach() {
    return this.newPath.coach;
  }

  saveNewPath() {
    return new Promise((resolve, reject) => {
      const loggedUser = this.authService.getLoggedUser();
      const survey = this.surveyService.getSurvey();

      const resource: any = {
        coach: {
          id: this.newPath.coach.id
        },
        user: {
          id: loggedUser.id
        },
        survey: {
          id: survey.id
        },
        sessions: [
          {
            proposed_date_1: timestampToUTC(this.newPath.dates[0]),
            proposed_date_2: timestampToUTC(this.newPath.dates[1]),
            proposed_date_3: timestampToUTC(this.newPath.dates[2]),
          }
        ],
      };

      this.http.post(API_URL + '/coachingplans', { resource })
        .subscribe((data) => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  createNewSession(isNew: boolean = true) {
    return new Promise((resolve, reject) => {
      const resource: any = {
        proposed_date_1: timestampToUTC(this.newPath.dates[0]),
        proposed_date_2: timestampToUTC(this.newPath.dates[1]),
        proposed_date_3: timestampToUTC(this.newPath.dates[2]),
      };

      if (!isNew) {
        resource.id = this.sessionId;
      }

      if (this.planId) {
        resource.coaching_plan = {
          id: this.planId
        };
      }

      this.http.post(API_URL + '/sessions', { resource })
        .subscribe((data) => {
          resolve(this.planId);
        }, (err) => {
          resolve(err);
        });
    });
  }

  savePlanSessions() {
    if (this.sessionId) {
      return this.createNewSession(false);
    }

    if (this.creatingNewPath) {
      return this.saveNewPath();
    }

    return this.createNewSession();
  }

  closePlan(plan) {
    return new Promise((resolve, reject) => {
      this.http.post(ACT_URL + '/coachingplans/' + plan.id + '/close_coaching_plan' , { })
        .subscribe((data) => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  setPlanId(planId) {
    this.planId = planId;
  }

  setSessionId(sessionId) {
    this.sessionId = sessionId;
  }

  setNewPath(newPath) {
    this.newPath = JSON.parse(JSON.stringify(newPath));
  }

  setCoach(coach) {
    this.newPath.coach = JSON.parse(JSON.stringify(coach));
  }

  setDates(dates) {
    this.newPath.dates = JSON.parse(JSON.stringify(dates));
  }

  setCreatingNewPath(value) {
    this.creatingNewPath = value;
  }

  saveTeachingAgreement(plan_id, coach_agreement) {
    return new Promise((resolve, reject) => {
      const resource = coach_agreement;
      resource.id = plan_id;

      this.http.post(API_URL + '/coachingplans', { resource })
        .subscribe((data) => {
          resolve('ok');
        }, (err) => {
          reject(err);
        });
    });
  }
}
