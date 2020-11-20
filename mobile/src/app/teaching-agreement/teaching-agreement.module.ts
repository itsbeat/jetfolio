import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeachingAgreementPage } from './teaching-agreement.page';
import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: TeachingAgreementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [TeachingAgreementPage]
})
export class TeachingAgreementPageModule {}
