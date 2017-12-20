import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//Mengambil modul http
import { HttpModule} from '@angular/http';
//Foto
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera} from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { KategoriPage,KategoriDetailPage } from '../pages/kategori/kategori';
import { PembelianPage,PembelianDetailPage,PembelianCreatePage } from '../pages/pembelian/pembelian';
import { DompetPage } from '../pages/dompet/dompet';
import { PesanPage,PesanDetailPage } from '../pages/pesan/pesan';
import { SettingPage } from '../pages/setting/setting';
import { KeranjangPage,KeranjangcreatePage } from '../pages/keranjang/keranjang';
import { SearchPage } from '../pages/search/search';
import { TokoPage } from '../pages/toko/toko';
import { TokokategoriPage,TokokategoriDetailPage } from '../pages/tokokategori/tokokategori';
import { TokokeranjangPage,TokokeranjangPage2,TokokeranjangCreatePage,TokokeranjangCreatePage2 } from '../pages/tokokeranjang/tokokeranjang';
import { TokopemesananPage,TokopemesananDetailPage,TokopemesananCreatePage } from '../pages/tokopemesanan/tokopemesanan';
import { TokopenjualanPage,TokopenjualanDetailPage } from '../pages/tokopenjualan/tokopenjualan';
import { TokoprodukPage,TokoprodukCreatePage } from '../pages/tokoproduk/tokoproduk';
import { TokoprofilePage } from '../pages/tokoprofile/tokoprofile';
import { TokosearchPage } from '../pages/tokosearch/tokosearch';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KategoriserviceProvider } from '../providers/kategoriservice/kategoriservice';
import { KategoriPageModule } from '../pages/kategori/kategori.module';
import { KeranjangserviceProvider } from '../providers/keranjangservice/keranjangservice';
import { PembelianserviceProvider } from '../providers/pembelianservice/pembelianservice';
import { SearchserviceProvider } from '../providers/searchservice/searchservice';
import { TokoprodukserviceProvider } from '../providers/tokoprodukservice/tokoprodukservice';
import { TokokategoriserviceProvider } from '../providers/tokokategoriservice/tokokategoriservice';
import { TokopenjualanserviceProvider } from '../providers/tokopenjualanservice/tokopenjualanservice';
import { TokopemesananserviceProvider } from '../providers/tokopemesananservice/tokopemesananservice';
import { TokokeranjangserviceProvider } from '../providers/tokokeranjangservice/tokokeranjangservice';
import { TokosearchserviceProvider } from '../providers/tokosearchservice/tokosearchservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //KategoriPage, KategoriDetailPage,
    PembelianPage, PembelianDetailPage,PembelianCreatePage,
    DompetPage,
    PesanPage, PesanDetailPage,
    SettingPage,
    KeranjangPage, KeranjangcreatePage,
    SearchPage,
    TokoPage,
    TokokategoriPage,TokokategoriDetailPage,
    TokokeranjangPage,TokokeranjangPage2,TokokeranjangCreatePage,TokokeranjangCreatePage2,
    TokopemesananPage, TokopemesananDetailPage,TokopemesananCreatePage,
    TokopenjualanPage, TokopenjualanDetailPage,
    TokoprodukPage, TokoprodukCreatePage,
    TokoprofilePage,
    TokosearchPage,
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
    PembelianPage, PembelianDetailPage,PembelianCreatePage,
    DompetPage,
    PesanPage, PesanDetailPage,
    SettingPage,
    KeranjangPage, KeranjangcreatePage,
    SearchPage,
    TokoPage,
    TokokategoriPage,TokokategoriDetailPage,
    TokokeranjangPage,TokokeranjangPage2,TokokeranjangCreatePage,TokokeranjangCreatePage2,
    TokopemesananPage, TokopemesananDetailPage,TokopemesananCreatePage,
    TokopenjualanPage, TokopenjualanDetailPage,
    TokoprodukPage, TokoprodukCreatePage,
    TokoprofilePage,
    TokosearchPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KategoriserviceProvider,
    KeranjangserviceProvider,
    PembelianserviceProvider,
    SearchserviceProvider,
    TokoprodukserviceProvider,
    TokokategoriserviceProvider,
    TokopenjualanserviceProvider,
    TokopemesananserviceProvider,
    TokokeranjangserviceProvider,
    TokosearchserviceProvider
  ]
})
export class AppModule {}
