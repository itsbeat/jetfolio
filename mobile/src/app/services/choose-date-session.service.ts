import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ProfileService } from './profile.service';

import { environment } from '../../environments/environment';

const API_URL = environment.API_URL + '/resource';

const days = [
  'D',
  'L',
  'M',
  'M',
  'G',
  'V',
  'S',
];

const hourToIndex = {
  8: 0,
  10: 1,
  14: 2,
  16: 3
};

const indexToHour = {
  1: 8,
  2: 10,
  3: 14,
  4: 16
};

function getDaysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

@Injectable({
  providedIn: 'root'
})
export class ChooseDateSessionService {
  date;
  dateIndex;
  dateSelected;
  dateToSelect;
  hourToSelect;
  hoursToSave;

  choosenDates: object = {};

  constructor(
    private http: HttpClient,
    private profileService: ProfileService
  ) {
    this.dateIndex = -1;
    this.date = {
      date: -1,
      hour: -1
    };
  }

  getDateSession(userId: Number) {
    const dateSessions = [];

    for (let i = 0; i < 3; i++) {
      dateSessions.push({
        date: -1,
        hour: -1
      });
    }

    return dateSessions;
  }

  resetChosenDates() {
    this.choosenDates = {};
  }

  getSelectedDate() {
    const dateObject = {
      date: this.dateToSelect ? (new Date(this.dateToSelect)).getTime() : -1,
      hour: this.hourToSelect || -1,
      hours: this.hourToSelect ? this.hoursToSave : {},
    };

    return dateObject;
  }

  getDate() {
    return this.date || new Date();
  }

  getSelectedDateAndIndex() {
    const dateObject = {
      date: this.date,
      index: this.dateIndex
    };

    this.date = null;
    this.dateIndex = null;

    return dateObject;
  }

  setIndex(index) {
    this.dateIndex = index;
  }

  setSelectedDate(date) {
    this.dateToSelect = new Date(date.date);
    this.hourToSelect = date.hour;
  }

  setDate(date) {
    this.dateToSelect = null;
    this.hourToSelect = null;

    this.choosenDates[this.dateIndex] = date;

    this.date = date;
  }

  getCalendarArray(month, year, dateChooserOnly = false) {
    const coach = this.profileService.getCurrentCoach();

    return new Promise((resolve, reject) => {
      const params = new HttpParams()
        .set('filter', JSON.stringify({ coach_id: coach.id }));

      if (!dateChooserOnly) {
        this.http.get(API_URL + '/availabilities', { params: params })
          .subscribe((data: any) => {
            const avails = data.resources.resources;

            const calendar = this.createCalendarGrid(month, year, avails, dateChooserOnly);

            resolve(calendar);
          }, (err) => {
            reject(err);
          });
      } else {
        resolve(this.createCalendarGrid(month, year, [], dateChooserOnly));
      }

    });
  }

  createCalendarGrid(month, year, avails, dateChooserOnly = false) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = getDaysInMonth(month, year);

    let date = 1;
    let weekIndex = 0;

    const weeks = [];
    const legend = [];

    days.forEach((day) => {
      legend.push({
        value: day,
        legend: true
      });
    });

    weeks.push(legend);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    while (date <= daysInMonth) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        const dayObj = {
          hasAvailable: false,
          id: -1,
          value: -1,
          hours: {},
          free: true,
          disabled: false,
          timestamp: -1
        };

        if ((weekIndex === 0 && j < firstDay) || date > daysInMonth) {
          dayObj.disabled = true;
          dayObj.free = false;
        } else {
          dayObj.value = date;
          dayObj.timestamp = new Date(year, month, date).getTime();

          const actualDate = new Date(year, month, date);

          if (j === 0 || actualDate.getTime() <= today.getTime()) {
            // Disable all sundays and days before this
            dayObj.disabled = true;
            dayObj.free = false;
          } else {
            dayObj.hours = {
              1: {
                available: dateChooserOnly,
                session: '',
              },
              2: {
                available: dateChooserOnly,
                session: '',
              },
              3: {
                available: dateChooserOnly,
                session: '',
              },
              4: {
                available: dateChooserOnly,
                session: '',
              },
            };

            // DB Dates lookup
            if (!dateChooserOnly) {
              avails.find((_date) => {
                const savedDate = new Date(_date.date);
                savedDate.setHours(0, 0, 0, 0);

                if (savedDate.getTime() === dayObj.timestamp) {
                  // Update day with DB info
                  dayObj.hasAvailable = !!_date.has_available;
                  dayObj.id = _date.id;

                  [1, 2, 3, 4].forEach((hour) => {
                    dayObj.hours[hour].available = !!_date['hour_' + hour + '_available'] && _date['hour_' + hour + '_session'] == null;
                  });

                  if (this.dateToSelect  && this.dateToSelect.getTime() === savedDate.getTime()) {
                    this.hoursToSave = dayObj.hours;
                  }
                }
              });
            } else {
              dayObj.hasAvailable = true;
            }

            // Check if this day is already selected
            Object.keys(this.choosenDates).forEach((cDateIndex) => {
              const cDate = this.choosenDates[cDateIndex];

              if (cDate.date === dayObj.timestamp) {
                dayObj.hours[cDate.hour].available = false;
              }
            });
          }

          date++;
        }

        week.push(dayObj);
      }

      weeks.push(week);
      weekIndex++;
    }


    return weeks;
  }
}
