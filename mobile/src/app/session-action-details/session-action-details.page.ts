import { SessionsService } from './../services/sessions.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChooseDateSessionService } from '../services/choose-date-session.service';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-action-details',
  templateUrl: './session-action-details.page.html',
  styleUrls: ['./session-action-details.page.scss']
})
export class SessionActionDetailsPage implements OnInit {
  type: string;
  actionId: string;
  action;
  sessionId: string;
  planId: string;
  isLoading = false;

  canProceed = false;

  constructor(
    private dateSessionChooseService: ChooseDateSessionService,
    private sessionService: SessionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadAction();
  }

  loadAction() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.planId = this.route.snapshot.paramMap.get('plan_id');
    this.sessionId = this.route.snapshot.paramMap.get('sessionId');
    this.actionId = this.route.snapshot.paramMap.get('actionId');

    this.isLoading = true;

    if (this.type && this.sessionId && this.actionId) {
      this.sessionService
        .getSessionById(this.planId, this.sessionId)
        .then((session) => {
          if (session.actions[this.actionId]) {
            this.action = session.actions[this.actionId];
          } else {
            this.action = {
              nota: "",
              deadline: null
            };
          }

          this.validate();
          this.isLoading = false;
        });
    }
  }

  validate() {
    // console.log('validate', this.note, this.deadline);
    if (this.action.note && this.action.deadline) {
      this.canProceed = true;
    } else {
      this.canProceed = false;
    }
  }

  save() {
    this.isLoading = true;

    this.sessionService.saveAction(this.sessionId, this.action)
      .then((data) => {
        this.router.navigate([`/session-details/${this.planId}/${this.sessionId}`]);
      }, (err) => {
        this.isLoading = false;
      });
  }

  setDate() {
    if (this.action.result != null) {
      return;
    }

    this.dateSessionChooseService.setIndex(1);
    this.router.navigate(['calendar'], { queryParams: {
      date_chooser_only: true,
      show_hours: false
    }});
  }

  ionViewWillEnter() {
    let dateSelected = this.dateSessionChooseService.getSelectedDateAndIndex();

    if (!dateSelected || !dateSelected.date) {
      this.loadAction();
    } else {
      if (dateSelected.index > -1) {
        this.action.deadline = new Date(dateSelected.date.date);
      }

      this.validate();
    }
  }
}
