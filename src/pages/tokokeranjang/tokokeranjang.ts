import { Component } from '@angular/core';
//Tambahkan Provider
import { TokokeranjangserviceProvider } from '../../providers/tokokeranjangservice/tokokeranjangservice';
//Tambahkan Variabel Global
import { TokokeranjangArray } from '../../pages/tokokeranjang/tokokeranjangarray';
import { NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { TokopemesananPage,TokopemesananCreatePage,TokopemesananDetailPage } from '../tokopemesanan/tokopemesanan';
import { TokoPage } from '../../pages/toko/toko';
//import { TokosearhPage } from '../../pages/tokosearch/tokosearch';
/**
 * Generated class for the TokokeranjangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tokokeranjang',
  templateUrl: 'tokokeranjang.html',
})
export class TokokeranjangPage {
items:TokokeranjangArray[]=[];
  jumlah:any;
  stok:any;
  constructor(public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public tokokeranjangservice:TokokeranjangserviceProvider) {

  }

  //Tampil data awal
ionViewDidLoad() {
  //Loading bar
  let loadingdata=this.loadincontroller.create({
    content:"Loading..."
  });
  loadingdata.present();
  //Tampilkan data dari server
  this.tokokeranjangservice.tampilkankeranjang().subscribe(
    //Jika data sudah berhasil di load
    (data:TokokeranjangArray[])=>{
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
        this.tokokeranjangservice.hapuskeranjang(item).subscribe(
          (data:any)=>{
            let mes=this._toast.create({
            message:'Data dihapus',
            duration:1000,
            position:'top'
            });
            //this.items.splice(this.items.indexOf(item),1);
            mes.present();
            this.nav.setRoot(TokokeranjangPage);
          }
        );
        //End Hapus Item
      }
    }
  ]
});
confirm.present();
}

tomboledit(item,lama:TokokeranjangArray,baru:TokokeranjangArray){
  //Pemberitahuan
  let alert = this.alertCtrl.create({
    title: 'Informasi',
    subTitle: 'Edit Item Sukses',
    buttons: ['OK']
  });
  let alert2 = this.alertCtrl.create({
    title: 'Informasi',
    subTitle: 'Stok Tidak Mencukupi',
    buttons: ['OK']
  });
  //Loading Data
  let loadingdata=this.loadincontroller.create({
      content:"Mengubah Item..."
  });

  //Cek Stok
  this.stok = item.produktoko.stok;
  if(this.jumlah > this.stok){
    alert2.present();
  }
  else{
    loadingdata.present();
    //Mengambil value dari edit field untuk dimasukkan ke UsulanArray
    this.tokokeranjangservice.editkeranjang(new TokokeranjangArray(item.id,item.id_toko,item.id_produkbumdes,this.jumlah))
    .subscribe(
      (data:any)=>{
        //Kirim Variable UsulanArray ke Usulanservice.ts
        if(data.affectedRows==1)
        {
          this.items[this.items.indexOf(lama)]=baru;
        }
        loadingdata.dismiss();
        this.nav.setRoot(TokokeranjangPage);
      },
      function(error){

      },
      function(){
        alert.present();
      }
    );   
  }
   
}
tombolsearch() {
  //this.nav.push(SearchPage);
}
tombolbeli() {
  this.nav.setRoot(TokoPage);
}
tombolkirim(item2) {
  this.nav.setRoot(TokopemesananCreatePage, { item2: item2 });
}
}

@Component({
  selector: 'page-tokokeranjang',
  templateUrl: 'tokokeranjang2.html',
})
export class TokokeranjangPage2 {
items:TokokeranjangArray[]=[];
  jumlah:any;
  stok:any;
  constructor(public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public tokokeranjangservice:TokokeranjangserviceProvider) {

  }

  //Tampil data awal
ionViewDidLoad() {
  //Loading bar
  let loadingdata=this.loadincontroller.create({
    content:"Loading..."
  });
  loadingdata.present();
  //Tampilkan data dari server
  this.tokokeranjangservice.tampilkankeranjang().subscribe(
    //Jika data sudah berhasil di load
    (data:TokokeranjangArray[])=>{
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
        this.tokokeranjangservice.hapuskeranjang(item).subscribe(
          (data:any)=>{
            let mes=this._toast.create({
            message:'Data dihapus',
            duration:1000,
            position:'top'
            });
            //this.items.splice(this.items.indexOf(item),1);
            mes.present();
            this.nav.setRoot(TokokeranjangPage);
          }
        );
        //End Hapus Item
      }
    }
  ]
});
confirm.present();
}

tomboledit(item,lama:TokokeranjangArray,baru:TokokeranjangArray){
  //Pemberitahuan
  let alert = this.alertCtrl.create({
    title: 'Informasi',
    subTitle: 'Edit Item Sukses',
    buttons: ['OK']
  });
  let alert2 = this.alertCtrl.create({
    title: 'Informasi',
    subTitle: 'Stok Tidak Mencukupi',
    buttons: ['OK']
  });
  //Loading Data
  let loadingdata=this.loadincontroller.create({
      content:"Mengubah Item..."
  });

  //Cek Stok
  this.stok = item.produktoko.stok;
  if(this.jumlah > this.stok){
    alert2.present();
  }
  else{
    loadingdata.present();
    //Mengambil value dari edit field untuk dimasukkan ke UsulanArray
    this.tokokeranjangservice.editkeranjang(new TokokeranjangArray(item.id,item.id_toko,item.id_produkbumdes,this.jumlah))
    .subscribe(
      (data:any)=>{
        //Kirim Variable UsulanArray ke Usulanservice.ts
        if(data.affectedRows==1)
        {
          this.items[this.items.indexOf(lama)]=baru;
        }
        loadingdata.dismiss();
        this.nav.setRoot(TokokeranjangPage2);
      },
      function(error){

      },
      function(){
        alert.present();
      }
    );   
  }
   
}
tombolsearch() {
  //this.nav.push(SearchPage);
}
tombolbeli() {
  this.nav.setRoot(TokoPage);
}
tombolkirim(item2) {
  this.nav.setRoot(TokopemesananCreatePage, { item2: item2 });
}
}

@Component({
  selector: 'page-create-tokokeranjang',
  templateUrl: 'tokokeranjang.html',
  //entryComponents: [ SearchPage ],
})
export class TokokeranjangCreatePage {
  id:Number
  id_toko:Number;
  item2;
  items:TokokeranjangArray[]=[];
  stok:any;
  constructor(public params: NavParams,public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public tokokeranjangservice:TokokeranjangserviceProvider) {
      this.item2 = params.data.item2;
  }

  //Tampil data awal
ionViewDidLoad(item2) {
  this.id_toko = 1;
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
    this.tokokeranjangservice.tambahkeranjang(new TokokeranjangArray(this.id,this.id_toko,this.item2.id,1))
    .subscribe(
      (data:TokokeranjangArray)=>{
        //Push
        loadingdata.dismiss();
        this.nav.setRoot(TokokeranjangPage);
      },
      function(error){
  
      },
      function(){
        //alert.present();
      }
    );
  }
}
