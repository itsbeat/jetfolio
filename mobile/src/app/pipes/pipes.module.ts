
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MomentPipe } from './m-date.pipe';

@NgModule({
  declarations: [MomentPipe],
  imports: [IonicModule],
  exports: [MomentPipe]
})
export class PipesModule {}