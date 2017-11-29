import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//Mengambil modul http
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { KategoriPage,KategoriDetailPage } from '../pages/kategori/kategori';
import { PembelianPage } from '../pages/pembelian/pembelian';
import { PenjualanPage } from '../pages/penjualan/penjualan';
import { DompetPage } from '../pages/dompet/dompet';
import { PesanPage } from '../pages/pesan/pesan';
import { SettingPage } from '../pages/setting/setting';
import { TokoPage } from '../pages/toko/toko';
import { KeranjangPage } from '../pages/keranjang/keranjang';
import { SearchPage } from '../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KategoriserviceProvider } from '../providers/kategoriservice/kategoriservice';
import { KategoriPageModule } from '../pages/kategori/kategori.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //KategoriPage,
    //KategoriDetailPage,
    PembelianPage,
    PenjualanPage,
    DompetPage,
    PesanPage,
    SettingPage,
    TokoPage,
    KeranjangPage,
    SearchPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    KategoriPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    KategoriPage,
    KategoriDetailPage,
    PembelianPage,
    PenjualanPage,
    DompetPage,
    PesanPage,
    SettingPage,
    TokoPage,
    KeranjangPage,
    SearchPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KategoriserviceProvider,
  ]
})
export class AppModule {}
