import { CoachService } from './../services/coach.service';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-choose-coach',
  templateUrl: './choose-coach.page.html',
  styleUrls: ['./choose-coach.page.scss']
})
export class ChooseCoachPage implements OnInit {
  selectedCoach = null;
  coaches = [];
  newPath = null;
  index = 0;
  isLoading = true;

  sliderConfig = {
    loop: true,
    initialSlide: 0,
    speed: 400,
    pager: true
  };

  @ViewChild('slider') slider: IonSlides;

  constructor(private coachService: CoachService, private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.coachService.getCoach().then(
      (coaches: any) => {
        this.coaches = coaches;

        this.selectedCoach = coaches[0];

        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }

  nextCoach() {
    this.slider.slideNext();
  }

  prevCoach() {
    this.slider.slidePrev();
  }

  chooseCoach() {
    this.slider.getActiveIndex().then((coachIndex) => {
      this.profileService.setCoach(this.coaches[coachIndex]);
      this.router.navigateByUrl('/date-session-chooser');
    });
  }
}
