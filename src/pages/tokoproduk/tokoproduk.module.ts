import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokoprodukPage,TokoprodukCreatePage } from './tokoproduk';

@NgModule({
  declarations: [
    TokoprodukPage,TokoprodukCreatePage
  ],
  imports: [
    IonicPageModule.forChild(TokoprodukPage),
  ],
})
export class TokoprodukPageModule {}
