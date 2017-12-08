import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokosearchPage } from './tokosearch';

@NgModule({
  declarations: [
    TokosearchPage,
  ],
  imports: [
    IonicPageModule.forChild(TokosearchPage),
  ],
})
export class TokosearchPageModule {}
