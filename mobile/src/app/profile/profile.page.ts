import { ProfileService } from './../services/profile.service';
import { Component, OnInit, ApplicationRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SlideInOutAnimation } from './profile.animation';
import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  animations: [SlideInOutAnimation]
})
export class ProfilePage implements OnInit {
  userDetails;
  coachPathId;
  canCreateNewSession = true;
  canClosePlan = false;
  plan: any;
  isLoading = true;
  sessions;
  avatarUrl = environment.BASE_URL + "/avatars/";

  animationState = 'in';
  actualScrool = 0;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private app: ApplicationRef,
    private _zone: NgZone,
    private route: ActivatedRoute,
    private changeManager: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.route.params.subscribe((params) => {
      if (params) {
        if (params.coach_path_id) {
          this.coachPathId = params.coach_path_id;
          this.loadPlan(this.coachPathId);
        }
      }
    });
  }

  goToPlanList() {
    this.router.navigate(['coaching-paths']);
  }

  loadPlan(coach_path_id) {
    this.isLoading = true;
    this.sessions = [];

    this.profileService
      .getPlanDetails(coach_path_id)
      .then((plan) => {
        this.plan = plan;
        this.sessions = this.marshallSessions(plan.sessions);

      this.updateCanCreateNewSession();

      this.isLoading = false;

      this.changeManager.detectChanges();
    });
  }

  marshallSessions(sessions) {
    let sessionIndex = 1;

    let filteredSessions = JSON.parse(JSON.stringify(sessions));

    filteredSessions.map((session) => {
      if (session.status.code != 'cancelled') {
        session.index = sessionIndex++;
      }

      return session;
    });

    return filteredSessions;
  }

  updateCanCreateNewSession() {
    let canCreateNewSession = true;

    // Check if there is ONE idle session
    //let oneSessionIsIdle = this.plan.sessions.some((session) => session.status.code == 'idle');

    let activeSessions = this.plan.sessions.filter((s) => {
      return ["cancelled"].indexOf(s.status.code) == -1;
    });

    this.canCreateNewSession = activeSessions.length < this.plan.sessions_number;
  }

  createSession() {
    this.profileService.setCoach(this.plan.coach);
    this.profileService.setSessionId(null);

    this.router.navigate(['date-session-chooser'], {
      queryParams: {
        coach_path_id: this.coachPathId
      }
    });
  }

  closePlan() {
    this.isLoading = true;

    this.profileService.closePlan(this.plan).then(
      (data) => {
        this.router.navigateByUrl('/coaching-paths');
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }

  goToSessionDetails(session) {
    if (session.status.code != 'cancelled') {
      this.router.navigate([
        `session-details/${this.coachPathId}/${session.id}`
      ]);
    }
  }

  goToCoachingPact() {
    this.router.navigate([`teaching-agreement/${this.coachPathId}`]);
  }

  createCoachingPact() {
    this.router.navigate([`teaching-agreement/${this.coachPathId}`]);
  }

  ionViewWillEnter() {
    this.loadPlan(this.coachPathId);
  }
}
