import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';

/**
 * Generated class for the TokoprodukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokoproduk',
  templateUrl: 'tokoproduk.html',
})
export class TokoprodukPage {

  constructor ( public nav: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public loadincontroller:LoadingController,
              public _toast:ToastController,) {
          }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokoprodukPage');
  }

  tokoprodukcreate () {
    this.nav.push (TokoprodukCreatePage);
  }
}

@Component({
  templateUrl: 'tokoproduk-create.html',
})
export class TokoprodukCreatePage {

  constructor ( public nav: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public loadincontroller:LoadingController,
              public _toast:ToastController,) {
          }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokoprodukPage');
  }

}
