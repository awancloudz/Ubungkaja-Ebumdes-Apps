import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { PembelianArray } from '../../pages/pembelian/pembelianarray';

/**
 * Generated class for the PembelianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pembelian',
  templateUrl: 'pembelian.html',
})
export class PembelianPage {

  items:PembelianArray[]=[];

  constructor ( public nav: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public loadincontroller:LoadingController,
              public _toast:ToastController,) {
            }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PembelianPage');
  }

  pembeliandetail () {
    this.nav.push (PembelianDetailPage);
  }
}


@Component({
  templateUrl: 'pembelian-detail.html',
})
export class PembelianDetailPage {
  item;
  id:Number;
  id_warga:Number;
  id_toko:Number;
  tanggal:String;
  isi_pesan:String;
  items:PembelianArray[]=[];
 
  constructor ( params: NavParams,
                public nav: NavController,
                public platform: Platform,
                public actionSheetCtrl: ActionSheetController,
                public alertCtrl: AlertController,
                public loadincontroller:LoadingController,
                public _toast:ToastController) {
                this.item = params.data.item;
              }

  
}