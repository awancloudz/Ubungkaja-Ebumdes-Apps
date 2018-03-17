import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokoprofilePage,TokoCreatePage } from './tokoprofile';

@NgModule({
  declarations: [
    TokoprofilePage,TokoCreatePage
  ],
  imports: [
    IonicPageModule.forChild(TokoprofilePage),
  ],
})
export class TokoprofilePageModule {}
