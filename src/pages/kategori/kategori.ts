import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { SembakoPage } from '../../pages/sembako/sembako';
import { PeralatanrumahtanggaPage } from '../../pages/peralatanrumahtangga/peralatanrumahtangga';
import { SearchPage } from '../../pages/search/search';
import { KeranjangPage } from '../../pages/keranjang/keranjang';
/**
 * Generated class for the KategoriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kategori',
  templateUrl: 'kategori.html',
  entryComponents: [ SembakoPage,PeralatanrumahtanggaPage,SearchPage,KeranjangPage ],
})
export class KategoriPage {

  constructor(public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KategoriPage');
  }
  
  tombolsembako () {
    this.nav.push (SembakoPage);
  }

  tombolperalatan () {
    this.nav.push (PeralatanrumahtanggaPage);
  }

  tombolsearch () {
    this.nav.push (SearchPage);
  }

  tombolkeranjang () {
    this.nav.push (KeranjangPage);
  }
}
