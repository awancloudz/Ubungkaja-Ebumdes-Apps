import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { TokopenjualanArray } from '../../pages/tokopenjualan/tokopenjualanarray';

/**
 * Generated class for the TokopenjualanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokopenjualan',
  templateUrl: 'tokopenjualan.html',
})
export class TokopenjualanPage {

  items:TokopenjualanArray[]=[];

  constructor ( public nav: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public loadincontroller:LoadingController,
              public _toast:ToastController,) {
            }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokopenjualanPage');
  }

  penjualandetail () {
    this.nav.push (TokopenjualanDetailPage);
  }
}


@Component({
  selector: 'page-tokopenjualan',
  templateUrl: 'tokopenjualan-detail.html',
})
export class TokopenjualanDetailPage {

  constructor ( public nav: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public loadincontroller:LoadingController,
              public _toast:ToastController,) {
            }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokopenjualanPage');
  }

}