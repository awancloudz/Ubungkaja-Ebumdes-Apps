import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';

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
})
export class KategoriPage {

  constructor(public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KategoriPage');
  }

}
