import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KategoriPage,KategoriDetailPage,KategoriDetailPage2 } from './kategori';

@NgModule({
  declarations: [
    KategoriPage, KategoriDetailPage,KategoriDetailPage2
  ],
  imports: [
    IonicPageModule.forChild(KategoriPage),
  ],
})
export class KategoriPageModule {}
