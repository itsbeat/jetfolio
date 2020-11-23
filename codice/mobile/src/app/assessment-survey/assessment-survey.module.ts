import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssessmentSurveyPage } from './assessment-survey.page';

const routes: Routes = [
  {
    path: '',
    component: AssessmentSurveyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssessmentSurveyPage]
})
export class AssessmentSurveyPageModule {}
