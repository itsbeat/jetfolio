import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserprofilePage } from './userprofile.page';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

const routes: Routes = [
  {
    path: '',
    component: UserprofilePage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [UserprofilePage],
  providers: [
    ActionSheetController,
    Camera
  ]
})
export class UserprofilePageModule {}
