import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//Mengambil modul http
import { HttpModule} from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { KategoriPage,KategoriDetailPage } from '../pages/kategori/kategori';
import { PembelianPage,PembelianDetailPage } from '../pages/pembelian/pembelian';
import { DompetPage } from '../pages/dompet/dompet';
import { PesanPage,PesanDetailPage } from '../pages/pesan/pesan';
import { SettingPage } from '../pages/setting/setting';
import { KeranjangPage,KeranjangcreatePage } from '../pages/keranjang/keranjang';
import { SearchPage } from '../pages/search/search';
import { TokoPage } from '../pages/toko/toko';
import { TokokategoriPage } from '../pages/tokokategori/tokokategori';
import { TokokeranjangPage } from '../pages/tokokeranjang/tokokeranjang';
import { TokopemesananPage } from '../pages/tokopemesanan/tokopemesanan';
import { TokopenjualanPage,TokopenjualanDetailPage } from '../pages/tokopenjualan/tokopenjualan';
import { TokoprodukPage } from '../pages/tokoproduk/tokoproduk';
import { TokoprofilePage } from '../pages/tokoprofile/tokoprofile';
import { TokosearchPage } from '../pages/tokosearch/tokosearch';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KategoriserviceProvider } from '../providers/kategoriservice/kategoriservice';
import { KategoriPageModule } from '../pages/kategori/kategori.module';
import { KeranjangserviceProvider } from '../providers/keranjangservice/keranjangservice';
import { PembelianserviceProvider } from '../providers/pembelianservice/pembelianservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //KategoriPage,
    //KategoriDetailPage,
    PembelianPage, PembelianDetailPage,
    DompetPage,
    PesanPage, PesanDetailPage,
    SettingPage,
    TokoPage,
    TokokategoriPage,
    TokokeranjangPage,
    TokopemesananPage,
    TokopenjualanPage, TokopenjualanDetailPage,
    TokoprodukPage,
    TokoprofilePage,
    TokosearchPage,
    KeranjangPage, KeranjangcreatePage,
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
    KategoriPage, KategoriDetailPage,
    PembelianPage, PembelianDetailPage,
    DompetPage,
    PesanPage, PesanDetailPage,
    SettingPage,
    KeranjangPage, KeranjangcreatePage,
    SearchPage,
    TokoPage,
    TokokategoriPage,
    TokokeranjangPage,
    TokopemesananPage,
    TokopenjualanPage, TokopenjualanDetailPage,
    TokoprodukPage,
    TokoprofilePage,
    TokosearchPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KategoriserviceProvider,
    KeranjangserviceProvider,
    PembelianserviceProvider
  ]
})
export class AppModule {}
