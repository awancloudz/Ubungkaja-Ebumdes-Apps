import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { KategoriPage } from '../pages/kategori/kategori';
import { CaritokoPage } from '../pages/caritoko/caritoko';
import { PembelianPage } from '../pages/pembelian/pembelian';
import { PenjualanPage } from '../pages/penjualan/penjualan';
import { DompetPage } from '../pages/dompet/dompet';
import { PesanPage } from '../pages/pesan/pesan';
import { SettingPage } from '../pages/setting/setting';
import { TokoPage } from '../pages/toko/toko';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KategoriPage,
    CaritokoPage,
    PembelianPage,
    PenjualanPage,
    DompetPage,
    PesanPage,
    SettingPage,
    TokoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    KategoriPage,
    CaritokoPage,
    PembelianPage,
    PenjualanPage,
    DompetPage,
    PesanPage,
    SettingPage,
    TokoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
