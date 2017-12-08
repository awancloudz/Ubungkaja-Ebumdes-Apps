import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
//Tambahkan Provider
import { PembelianserviceProvider } from '../../providers/pembelianservice/pembelianservice';
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
              public _toast:ToastController,
              public pembelianservise:PembelianserviceProvider
              ) {
            }

  ionViewDidLoad() {
    //Loading bar
    let loadingdata=this.loadincontroller.create({
      content:"Loading..."
    });
    loadingdata.present();
    //Tampilkan data dari server
    this.pembelianservise.tampilkanpembelian().subscribe(
      //Jika data sudah berhasil di load
      (data:PembelianArray[])=>{
        this.items=data;
      },
      //Jika Error
      function (error){   
      },
      //Tutup Loading
      function(){
        loadingdata.dismiss();
      }
    );
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
  subtotal:Number
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