import { SessionsService } from './../services/sessions.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import moment from 'moment';

const actionPlanNumberOfItems = 3;

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.page.html',
  styleUrls: ['./session-details.page.scss']
})
export class SessionDetailsPage implements OnInit {
  session;
  actionPlanTemplateItems = [];
  canProceed;
  isLoading;
  planId;
  sessionId;
  infoMessage;

  infoMessages: any = {
    "isIdle": "Questa sessione non è ancora stata approvata dal tuo coach",
    "isCancelled": "Questa sessione è stata cancellata",
    "isNotYetCarriedOut": "Prima di impostare il piano d'azione è necessario portare a termine la sessione con il coach"
  };

  constructor(
    private sessionService: SessionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params) {
        if (params.session_id && params.plan_id) {
          this.planId = params.plan_id;
          this.sessionId = params.session_id;

          this.loadSession();
        }
      }
    });
  }

  loadSession() {
    this.isLoading = true;
    this.infoMessage = "";

    this.sessionService
      .getSessionById(this.planId, this.sessionId)
      .then((session) => {
        this.session = session;

        let actionIsActive = false;
        let noActionPlanReason = "";

        if (["idle", "cancelled"].indexOf(session.status.code) == -1) {
          actionIsActive = true;
        } else {
          switch (session.status.code) {
            case 'idle':
              noActionPlanReason = "isIdle";
              break;

            case 'cancelled':
              noActionPlanReason = "isCancelled";
              break;
          }
        }

        let actionHasBeenCarriedOut = moment(new Date()) > moment(this.session.date);

        if (!actionHasBeenCarriedOut) {
          noActionPlanReason = "isNotYetCarriedOut";
        }

        let noActionPlan = !actionHasBeenCarriedOut || !actionIsActive;

        if (noActionPlan) {
          this.infoMessage = this.infoMessages[noActionPlanReason];
        } else {
          this.actionPlanTemplateItems = Array(actionPlanNumberOfItems)
            .fill(0)
            .map((x, i) => i);
        }

        this.validate();
        this.isLoading = false;
      });
  }

  goToActionDetails(actionId) {
    if (actionId === 0) {
      this.router.navigateByUrl(
        `/session-action-details/new/${this.planId}/${
          this.session.id
        }/${actionId}`
      );
    } else {
      this.router.navigateByUrl(
        `/session-action-details/edit/${this.planId}/${
          this.session.id
        }/${actionId}`
      );
    }
  }

  goToPlanDetails() {
    this.router.navigateByUrl(
      `/profile/${this.planId}`
    );
  }
  generateReport() {
    this.router.navigateByUrl(
      `/generate-report/${this.planId}/${this.session.id}`
    );
  }

  chooseDates() {
    this.router.navigate(['date-session-chooser', {
      session_id: this.sessionId,
      plan_id: this.planId
    }]);
  }

  ionViewWillEnter() {
    this.loadSession();
  }

  validate() {
    let valid = true;

    let deadlinesNotMet = this.session.actions.some((action) => {
      // Deadline is met if the deadline date is less than
      // actual date
      return moment(new Date()) < moment(action.deadline);

    });

    valid = this.session.actions.length == actionPlanNumberOfItems
    valid = valid && !deadlinesNotMet;

    this.canProceed = valid;
  }
}
