import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-create-new-path',
  templateUrl: './create-new-path.page.html',
  styleUrls: ['./create-new-path.page.scss'],
})
export class CreateNewPathPage implements OnInit {
  loadingText: string;

  constructor(
    private router: Router,
    private profileService: ProfileService
  ) {
    this.profileService = profileService;
    this.router = router;
  }

  ngOnInit() {
    this.loadingText = this.profileService.getCreatingNewPath() ?
      "Creando nuovo piano..." :
      "Creando nuova sessione...";

    this.profileService.savePlanSessions()
      .then((plan_id) => {
        if (this.profileService.getCreatingNewPath()) {
          this.profileService.setCreatingNewPath(false);
          this.router.navigateByUrl('/coaching-paths');
        } else {
          this.router.navigateByUrl('/profile/' + plan_id);
        }
      });
  }
}
