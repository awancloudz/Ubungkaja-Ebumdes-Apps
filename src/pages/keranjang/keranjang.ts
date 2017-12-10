import { Component } from '@angular/core';
//Tambahkan Provider
import { KeranjangserviceProvider } from '../../providers/keranjangservice/keranjangservice';
//Tambahkan Variabel Global
import { KeranjangArray } from '../../pages/keranjang/keranjangarray';
import { NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';
import { PembelianPage,PembelianCreatePage } from '../pembelian/pembelian';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the KeranjangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-keranjang',
  templateUrl: 'keranjang.html',
  entryComponents: [ SearchPage ],
})
export class KeranjangPage {
  items:KeranjangArray[]=[];
  jumlah:any;
  constructor(public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public keranjangservice:KeranjangserviceProvider) {

  }

  //Tampil data awal
ionViewDidLoad() {
  //Loading bar
  let loadingdata=this.loadincontroller.create({
    content:"Loading..."
  });
  loadingdata.present();
  //Tampilkan data dari server
  this.keranjangservice.tampilkankeranjang().subscribe(
    //Jika data sudah berhasil di load
    (data:KeranjangArray[])=>{
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
  message: 'Yakin Menghapus Item',
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
        this.keranjangservice.hapuskeranjang(item).subscribe(
          (data:any)=>{
            let mes=this._toast.create({
            message:'Data dihapus',
            duration:1000,
            position:'top'
            });
            //this.items.splice(this.items.indexOf(item),1);
            mes.present();
            this.nav.setRoot(KeranjangPage);
          }
        );
        //End Hapus Item
      }
    }
  ]
});
confirm.present();
}

tomboledit(item,lama:KeranjangArray,baru:KeranjangArray){
  //Pemberitahuan
  let alert = this.alertCtrl.create({
    title: 'Informasi',
    subTitle: 'Edit Item Sukses',
    buttons: ['OK']
  });
  //Loading Data
  let loadingdata=this.loadincontroller.create({
      content:"Mengubah Item..."
  });
  loadingdata.present();
  //Mengambil value dari edit field untuk dimasukkan ke UsulanArray
  this.keranjangservice.editkeranjang(new KeranjangArray(item.id,item.id_warga,item.id_produktoko,this.jumlah))
  .subscribe(
    (data:any)=>{
      //Kirim Variable UsulanArray ke Usulanservice.ts
      if(data.affectedRows==1)
      {
        this.items[this.items.indexOf(lama)]=baru;
      }
      loadingdata.dismiss();
      this.nav.setRoot(KeranjangPage);
    },
    function(error){

    },
    function(){
      alert.present();
    }
  );  
}
tombolsearch() {
  this.nav.push (SearchPage);
}
tombolbeli() {
  this.nav.setRoot(HomePage);
}
tombolkirim(item2) {
  this.nav.setRoot(PembelianCreatePage, { item2: item2 });
}
}

@Component({
  selector: 'page-create-keranjang',
  templateUrl: 'keranjang.html',
  entryComponents: [ SearchPage ],
})
export class KeranjangcreatePage {
  id:Number
  id_warga:Number;
  item2;
  items:KeranjangArray[]=[];
  constructor(public params: NavParams,public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public keranjangservice:KeranjangserviceProvider) {
      this.item2 = params.data.item2;
  }

  //Tampil data awal
ionViewDidLoad(item2) {
  this.id_warga = 1;
    //Pemberitahuan
    let alert = this.alertCtrl.create({
      title: 'Informasi',
      subTitle: 'Barang dimasukkan keranjang',
      buttons: ['OK']
    });
    //Loading Data
    let loadingdata=this.loadincontroller.create({
        content:"Menambahkan ke keranjang..."
    });
    loadingdata.present();
    //Mengambil value dari input field untuk dimasukkan ke UsulanArray
    this.keranjangservice.tambahkeranjang(new KeranjangArray(this.id,this.id_warga,this.item2.id,1))
    .subscribe(
      (data:KeranjangArray)=>{
        //Push
        loadingdata.dismiss();
        this.nav.setRoot(KeranjangPage);
      },
      function(error){

      },
      function(){
        //alert.present();
      }
    );
  }
}
