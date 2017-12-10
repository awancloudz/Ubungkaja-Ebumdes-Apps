import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PembelianPage,PembelianDetailPage,PembelianCreatePage } from './pembelian';

@NgModule({
  declarations: [
    PembelianPage,
  ],
  imports: [
    IonicPageModule.forChild(PembelianPage),
  ],
})
export class PembelianPageModule {}
