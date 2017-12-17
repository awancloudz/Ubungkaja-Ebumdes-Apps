import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokokategoriPage,TokokategoriDetailPage } from './tokokategori';

@NgModule({
  declarations: [
    TokokategoriPage,TokokategoriDetailPage
  ],
  imports: [
    IonicPageModule.forChild(TokokategoriPage),
  ],
})
export class TokokategoriPageModule {}
