import { LoginPage } from './../login/login.page';
import { Component, OnInit } from '@angular/core';
import { ChooseDateSessionService } from '../services/choose-date-session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  date;
  weeks;
  hours;
  year;
  month;
  monthName;
  isLoading;
  dateChooserOnly;
  today = new Date();

  dateSelected;
  show_hours = true;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private chooseDateSessionService: ChooseDateSessionService,
  ) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.showHours();

    if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.date) {
      this.date = {
        date: new Date(parseInt(this.route.snapshot.queryParams.date)),
        hour: this.route.snapshot.queryParams.hour
      }

      this.chooseDateSessionService.setSelectedDate(this.date);
    } else {
      this.date = {
        date: new Date()
      };
    }

    this.dateChooserOnly = !!this.route.snapshot.queryParams.date_chooser_only;

    this.updateCalendar();
  }

  showHours() {
    this.route.queryParams.subscribe((params) => {
      if (params.show_hours) {
        this.show_hours = params.show_hours == 'false' ? false : true;
      }
    });
  }

  updateCalendar() {
    this.isLoading = true;

    this.year = this.date.date.getYear() + 1900;
    this.month = this.date.date.getMonth();
    this.monthName = monthNames[this.month];

    this.chooseDateSessionService.getCalendarArray(this.month, this.year, this.dateChooserOnly)
      .then((weeks) => {
        this.dateSelected = this.chooseDateSessionService.getSelectedDate();
        this.weeks = weeks;
      }, (err) => {
        console.log(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  saveDate() {
    this.chooseDateSessionService.setDate(this.dateSelected);
    this.location.back();
  }

  selectHour(hourIndex) {
    if (this.dateSelected.hours[hourIndex].available) {
      this.dateSelected.hour = hourIndex;
    }
  }

  selectDate(day) {
    if (day.hasAvailable) {
      if (!this.show_hours) {
        this.dateSelected.hour = 1;
      }

      this.dateSelected.hour = this.dateChooserOnly ? 1 : -1;
      this.dateSelected.date = day.timestamp;
      this.dateSelected.hours = day.hours;

      //this.chooseDateSessionService.setDate(new Date(parseInt(day);
    }
  }

  nextMonth() {
    this.date.date.setMonth(this.date.date.getMonth() + 1);

    this.updateCalendar();
  }

  prevMonth() {
    if (this.today.getMonth() < this.date.date.getMonth()) {
      this.date.date.setMonth(this.date.date.getMonth() - 1);

      this.updateCalendar();
    }
  }
}
