import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokoPage } from './toko';

@NgModule({
  declarations: [
    TokoPage,
  ],
  imports: [
    IonicPageModule.forChild(TokoPage),
  ],
})
export class TokoPageModule {}
