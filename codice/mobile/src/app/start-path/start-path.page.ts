import { Component, OnInit } from '@angular/core';

import { ProfileService } from './../services/profile.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-start-path',
  templateUrl: './start-path.page.html',
  styleUrls: ['./start-path.page.scss'],
})
export class StartPathPage implements OnInit {
  steps = [
    {
      title: "Questionario",
      text: `
        Per iniziare, è necessario compilare un breve questionario di autovalutazione.
        Questo ci servirà per proporti i coach piu' vicini alle tue esigenze!
      `,
      color: "primary",
    },
    {
      title: "Scelta Coach",
      text: `
        Potrai scegliere il coach che ti seguirà nel tuo percorso.
      `,
      color: "secondary",
    },
    {
      title: "Prenotazione Sessione",
      text: `
        Ti verrà richiesto di scegliere 3 date da proporre al coach per svolgere la prima sessione di coaching.
      `,
      color: "rose",
    },
  ];

  constructor(
    private router: Router,
    private coachPathService: ProfileService,
  ) {
    this.router = router;
    this.coachPathService = coachPathService;
  }

  ngOnInit() {
    this.coachPathService.setCreatingNewPath(true);
  }

  startCoachingPathCreation() {
    this.router.navigateByUrl('/assessment-survey');
  }

}
