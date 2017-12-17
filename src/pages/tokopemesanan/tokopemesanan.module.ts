import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokopemesananPage,TokopemesananCreatePage,TokopemesananDetailPage } from './tokopemesanan';

@NgModule({
  declarations: [
    TokopemesananPage,TokopemesananCreatePage,TokopemesananDetailPage
  ],
  imports: [
    IonicPageModule.forChild(TokopemesananPage),
  ],
})
export class TokopemesananPageModule {}
