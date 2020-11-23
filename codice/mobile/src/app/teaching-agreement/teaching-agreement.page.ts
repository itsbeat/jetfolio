import { ProfileService } from './../services/profile.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teaching-agreement',
  templateUrl: './teaching-agreement.page.html',
  styleUrls: ['./teaching-agreement.page.scss']
})
export class TeachingAgreementPage implements OnInit {
  @Input() coachingAgreement = null;
  coach_path_id;
  isLoading = true;
  canProceed = false;

  empty_teaching_agreement = {
    goal_1: "",
    goal_2: "",
    goal_3: "",
    sessions_number: 4,
    kpi_measure: "",
    approved: false
  };

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.route.params.subscribe((params) => {
      if (params) {
        this.coach_path_id = params.coaching_path_id;

        this.loadCoachingAgreement(this.coach_path_id);
      }
    });
  }

  goBack() {
    this.router.navigateByUrl(`/profile/${this.coach_path_id}`);
  }

  loadCoachingAgreement(coaching_path_id) {
    this.profileService.getPlanDetails(coaching_path_id)
      .then((plan) => {
        if (!plan.approved && !plan.approval_required && !plan.change_requested) {
          this.coachingAgreement = JSON.parse(
            JSON.stringify(this.empty_teaching_agreement)
          );
        } else {
          this.coachingAgreement = JSON.parse(JSON.stringify(plan));
        }

        if (!this.coachingAgreement.approved) {
          this.validate();
        }

        this.isLoading = false;
      });
  }

  saveTeachingAgreement() {
    this.isLoading = true;

    this.coachingAgreement.approval_required = true;
    this.coachingAgreement.change_requested = false;

    this.profileService.saveTeachingAgreement(
      this.coach_path_id,
      this.coachingAgreement
    ).then((ok) => {
        this.router.navigateByUrl(`/profile/${this.coach_path_id}`);
      }, (err) => {
        this.isLoading = false;
        console.log(err);
      });
  }

  validate() {
    let valid = true;

    valid = valid && this.coachingAgreement.goal_1 != "";
    valid = valid && this.coachingAgreement.goal_2 != "";
    valid = valid && this.coachingAgreement.goal_3 != "";

    valid = valid && this.coachingAgreement.kpi_measure != "";

    this.canProceed = valid;
  }

  addSession() {
    if (this.coachingAgreement.sessions_number < 8) {
      this.coachingAgreement.sessions_number++;
    }
  }

  removeSession() {
    if (this.coachingAgreement.sessions_number === 1) {
      return;
    }

    this.coachingAgreement.sessions_number--;
  }
}
