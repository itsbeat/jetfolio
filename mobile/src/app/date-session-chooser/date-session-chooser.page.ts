import { ChooseDateSessionService } from './../services/choose-date-session.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-date-session-chooser',
  templateUrl: './date-session-chooser.page.html',
  styleUrls: ['./date-session-chooser.page.scss']
})
export class DateSessionChooserPage implements OnInit {
  dates = [];
  choosenDates = 0;
  planId;
  isCreatingNewPath = false;

  hourSlots = {
    1: '08:00 - 10:00',
    2: '10:00 - 12:00',
    3: '14:00 - 16:00',
    4: '16:00 - 18:00'
  };

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private dateSessionChooseService: ChooseDateSessionService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    console.log('on init');

    this.planId = this.route.snapshot.queryParamMap.get('coach_path_id');
    this.profileService.setPlanId(this.planId);
    this.dates = this.dateSessionChooseService.getDateSession(this.planId);

    if (this.route.snapshot.paramMap.get('session_id')) {
      const sessionId = this.route.snapshot.paramMap.get('session_id');
      const planId = this.route.snapshot.paramMap.get('plan_id');

      this.profileService.setSessionId(sessionId);
      this.profileService.setPlanId(planId);
    } else {
      this.isCreatingNewPath = this.profileService.getCreatingNewPath();
    }

    this.dateSessionChooseService.resetChosenDates();
  }

  addDate(index) {
    this.dateSessionChooseService.setIndex(index);

    let params: any = {};

    if (this.dates[index].date != -1) {
      params = {
        date: this.dates[index].date,
        hour: this.dates[index].hour
      };
    }

    this.router.navigate(['/calendar'], { queryParams: params });
  }

  saveRequest() {
    this.profileService.setDates(this.dates);

    this.router.navigateByUrl('/save-plan-sessions');
  }

  ionViewWillEnter() {
    // Check if dateSessionChooseService has dates to put there
    let dateSelected = this.dateSessionChooseService.getSelectedDateAndIndex();
    console.log(dateSelected.index);
    console.log(dateSelected.date);

    if (dateSelected.index > -1 && dateSelected.date != null) {
      // Add to the day timestamp the hours present in hour (in milliseconds)
      this.dates[dateSelected.index] = dateSelected.date;

      this.choosenDates++;
    }
  }
}
