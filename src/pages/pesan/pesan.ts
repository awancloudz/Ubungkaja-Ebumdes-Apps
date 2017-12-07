import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { PesanArray } from '../../pages/pesan/pesanarray';

/**
 * Generated class for the PesanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesan',
  templateUrl: 'pesan.html',
})
export class PesanPage {

  items:PesanArray[]=[];

  constructor ( public nav: NavController,
                public platform: Platform,
                public actionSheetCtrl: ActionSheetController,
                public alertCtrl: AlertController,
                public loadincontroller:LoadingController,
                public _toast:ToastController,) {
              }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PesanPage');
  }
  
  detailpesan () {
    this.nav.push (PesanDetailPage);
  }
}


@Component({
  selector: 'page-pesan',
  templateUrl: 'pesan-detail.html',
})
export class PesanDetailPage {
  item;
  id:Number;
  id_warga:Number;
  id_toko:Number;
  tanggal:String;
  isi_pesan:String;
  items:PesanArray[]=[];
 
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