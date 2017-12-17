import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokopenjualanPage,TokopenjualanDetailPage } from './tokopenjualan';

@NgModule({
  declarations: [
    TokopenjualanPage,TokopenjualanDetailPage
  ],
  imports: [
    IonicPageModule.forChild(TokopenjualanPage),
  ],
})
export class TokopenjualanPageModule {}
