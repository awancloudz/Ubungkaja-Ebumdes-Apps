import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { KategoriPage } from '../pages/kategori/kategori';
import { CaritokoPage } from '../pages/caritoko/caritoko';
import { PembelianPage } from '../pages/pembelian/pembelian';
import { PenjualanPage } from '../pages/penjualan/penjualan';
import { DompetPage } from '../pages/dompet/dompet';
import { PesanPage } from '../pages/pesan/pesan';
import { SettingPage } from '../pages/setting/setting';
import { TokoPage } from '../pages/toko/toko';
import { KeranjangPage } from '../pages/keranjang/keranjang';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string ,component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Kategori', icon: "ios-add" , component: KategoriPage },
      { title: 'Cari Toko', icon: "", component: CaritokoPage },
      { title: 'Pembelian', icon: "" , component: PembelianPage },
      { title: 'Penjualan', icon: "" , component: PenjualanPage },
      { title: 'Dompet', icon: "" , component: DompetPage },
      { title: 'Pesan', icon: "" , component: PesanPage },
      { title: 'Setting', icon: "" , component: SettingPage },
      { title: 'Toko Saya', icon: "" , component: TokoPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}