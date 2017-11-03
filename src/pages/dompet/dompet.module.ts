import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DompetPage } from './dompet';

@NgModule({
  declarations: [
    DompetPage,
  ],
  imports: [
    IonicPageModule.forChild(DompetPage),
  ],
})
export class DompetPageModule {}
