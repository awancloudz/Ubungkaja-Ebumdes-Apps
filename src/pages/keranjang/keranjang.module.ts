import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeranjangPage,KeranjangcreatePage } from './keranjang';

@NgModule({
  declarations: [
    KeranjangPage,KeranjangcreatePage
  ],
  imports: [
    IonicPageModule.forChild(KeranjangPage),
  ],
})
export class KeranjangPageModule {}
