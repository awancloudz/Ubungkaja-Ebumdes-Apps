import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { KeranjangPage } from '../../pages/keranjang/keranjang';
import { SearchPage } from '../../pages/search/search';
import { KategoriDetailPage } from '../../pages/kategori/kategori';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  entryComponents: [ KeranjangPage,SearchPage,KategoriDetailPage ],
})
export class HomePage {

  constructor(public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController) {

  }

  tombolkeranjang() {
      this.nav.push (KeranjangPage);
  }

  tombolsearch() {
    this.nav.push (SearchPage);
  }

  tombolsembako() {
    this.nav.push (KategoriDetailPage);
  }

}
