import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const API_URL = environment.API_URL + "/resource";

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  constructor(
    private http: HttpClient
  ) { }

  getCoach(){
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + "/coaches")
        .subscribe((data: any) => {
          let coaches = data.resources.resources;

          coaches = coaches.map((coach) => {
            coach.avatar = environment.BASE_URL + "/avatars/" + coach.avatar;
            return coach;
          });

          resolve(coaches);
        }, (err) => {
          reject(err);
        });
    });
  }
}
