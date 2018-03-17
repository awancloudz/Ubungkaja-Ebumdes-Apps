import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesanPage,PesanDetailPage } from './pesan';

@NgModule({
  declarations: [
    PesanPage,PesanDetailPage
  ],
  imports: [
    IonicPageModule.forChild(PesanPage),
  ],
})
export class PesanPageModule {}
