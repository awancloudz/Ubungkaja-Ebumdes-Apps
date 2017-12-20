import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokokeranjangPage,TokokeranjangPage2,TokokeranjangCreatePage,TokokeranjangCreatePage2 } from './tokokeranjang';

@NgModule({
  declarations: [
    TokokeranjangPage,TokokeranjangPage2,TokokeranjangCreatePage,TokokeranjangCreatePage2
  ],
  imports: [
    IonicPageModule.forChild(TokokeranjangPage),
  ],
})
export class TokokeranjangPageModule {}
