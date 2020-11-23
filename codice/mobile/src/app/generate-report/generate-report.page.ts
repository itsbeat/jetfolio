import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SessionsService } from '../services/sessions.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.page.html',
  styleUrls: ['./generate-report.page.scss']
})
export class GenerateReportPage implements OnInit {
  canProceed = false;
  session;
  sessionId;
  planId;
  note;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sessionsService: SessionsService
  ) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.sessionsService = sessionsService;
  }

  ngOnInit() {
    this.sessionId = this.activatedRoute.snapshot.paramMap.get('session_id');
    this.planId = this.activatedRoute.snapshot.paramMap.get('plan_id');
    if (this.sessionId && this.planId) {
      this.sessionsService
        .getSessionById(this.planId, this.sessionId)
        .then((session) => {
          this.session = session;
        });
    }
  }

  tickAction(result, actionIndex) {
    this.session.actions[actionIndex].result = result ? 1 : 0;

    let allActionsChecked = true;

    this.session.actions.forEach((action) => {
      allActionsChecked = allActionsChecked && action.result != null;
    });

    this.canProceed = allActionsChecked;
  }

  saveReport() {
    this.session.report = true;
    this.session.report_date = new Date();
    this.session.report_note = this.note;

    this.sessionsService
      .saveSession(this.session)
      .then((data) => {
        this.router.navigate([`/session-details/${this.planId}/${this.sessionId}`]);
      }, (err) => {
      });
  }
}
