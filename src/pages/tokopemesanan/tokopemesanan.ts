import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';

/**
 * Generated class for the TokopemesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokopemesanan',
  templateUrl: 'tokopemesanan.html',
})
export class TokopemesananPage {

  constructor ( public nav: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public loadincontroller:LoadingController,
              public _toast:ToastController,) {
            }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokopemesananPage');
  }

  tokopemesanandetail () {
    this.nav.push (TokopemesananDetailPage)
  }

}


@Component({
  selector: 'page-tokopemesanan',
  templateUrl: 'tokopemesanan-detail.html',
})
export class TokopemesananDetailPage {

  constructor ( public nav: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public loadincontroller:LoadingController,
              public _toast:ToastController,) {
            }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokopemesananPage');
  }

}
