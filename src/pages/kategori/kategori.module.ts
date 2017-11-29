import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KategoriPage,KategoriDetailPage } from './kategori';

@NgModule({
  declarations: [
    KategoriPage, KategoriDetailPage
  ],
  imports: [
    IonicPageModule.forChild(KategoriPage),
  ],
})
export class KategoriPageModule {}
