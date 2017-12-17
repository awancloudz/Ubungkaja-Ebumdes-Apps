import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokokeranjangPage,TokokeranjangPage2,TokokeranjangCreatePage } from './tokokeranjang';

@NgModule({
  declarations: [
    TokokeranjangPage,TokokeranjangPage2,TokokeranjangCreatePage
  ],
  imports: [
    IonicPageModule.forChild(TokokeranjangPage),
  ],
})
export class TokokeranjangPageModule {}
