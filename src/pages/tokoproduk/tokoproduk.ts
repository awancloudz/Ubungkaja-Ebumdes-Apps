import { Component } from '@angular/core';
//Tambahkan Provider
import { TokoprodukserviceProvider } from '../../providers/tokoprodukservice/tokoprodukservice';
//Tambahkan Variabel Global
import { TokoprodukArray } from '../../pages/tokoproduk/tokoprodukarray';
import { NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular'
import { TokokategoriserviceProvider } from '../../providers/tokokategoriservice/tokokategoriservice';
/**
 * Generated class for the TokoprodukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tokoproduk',
  templateUrl: 'tokoproduk.html',
})
export class TokoprodukPage {
  items:TokoprodukArray[]=[];
  constructor(public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public tokoprodukservice:TokoprodukserviceProvider) {

  }

  //Tampil data awal
ionViewDidLoad() {
  //Loading bar
  let loadingdata=this.loadincontroller.create({
    content:"Loading..."
  });
  loadingdata.present();
  //Tampilkan data dari server
  this.tokoprodukservice.tampilkanproduk().subscribe(
    //Jika data sudah berhasil di load
    (data:TokoprodukArray[])=>{
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
tombolhapus(item){
//Alert Konfirmasi
let confirm = this.alertCtrl.create({
  title: 'Konfirmasi',
  message: 'Yakin Menghapus Produk',
  buttons: [
    {
      text: 'Tidak',
      role: 'cancel',
      handler: () => {
        //console.log('Batal');
      }
    },
    {
      text: 'Ya',
      handler: () => {
        //Hapus item
        this.tokoprodukservice.hapusproduk(item).subscribe(
          (data:any)=>{
            let mes=this._toast.create({
            message:'Data produk dihapus',
            duration:1000,
            position:'top'
            });
            this.items.splice(this.items.indexOf(item),1);
            mes.present();
            //this.nav.setRoot(TokoprodukPage);
          }
        );
        //End Hapus Item
      }
    }
  ]
});
confirm.present();
}
tokoprodukcreate(){
  this.nav.push(TokoprodukCreatePage);
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
