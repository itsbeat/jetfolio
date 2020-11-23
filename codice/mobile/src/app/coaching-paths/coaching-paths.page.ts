import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-coaching-paths',
  templateUrl: './coaching-paths.page.html',
  styleUrls: ['./coaching-paths.page.scss']
})
export class CoachingPathsPage implements OnInit {
  plans = [];
  isLoading = true;
  canProceed = true;

  constructor(
    private router: Router,
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef,
    private profileService: ProfileService
  ) {
    this.router = router;
  }

  ngOnInit() {
    // On component init
    this.loadPlans();
  }

  ionViewWillEnter() {
    // When we reach this page after init
    this.loadPlans();
  }

  loadPlans() {
    this.isLoading = true;

    this.profileService.getCoachingPaths()
      .then((plans: any) => {
        this.plans = JSON.parse(JSON.stringify(plans));

        this.updateCanProceed();

        this.isLoading = false;

        this.changeDetector.detectChanges();
      }, (err) => {
        this.plans = [];
        this.isLoading = false;
      });
  }

  updateCanProceed() {
    this.canProceed = !this.plans.some((plan) =>
      plan.status.code == 'idle'
      || plan.status.code == 'active'
    );
  }

  addPlan() {
    if (this.canProceed) {
      this.router.navigateByUrl('/start-path');
    }
  }

  showPlanDetails(coachPathId) {
    this.router.navigateByUrl(`profile/${coachPathId}`);
  }

  goToProfile() {
    this.router.navigateByUrl('userprofile');
  }
}
