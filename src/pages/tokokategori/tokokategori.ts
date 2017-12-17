import { Component } from '@angular/core';
//Tambahkan Provider
import { TokokategoriserviceProvider } from '../../providers/tokokategoriservice/tokokategoriservice';
import { TokokeranjangserviceProvider } from '../../providers/tokokeranjangservice/tokokeranjangservice';
//Tambahkan Variabel Global
import { TokokategoriArray } from '../../pages/tokokategori/tokokategoriarray';
import { NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { TokokeranjangPage,TokokeranjangCreatePage } from '../../pages/tokokeranjang/tokokeranjang';
import { TokokeranjangArray } from '../tokokeranjang/tokokeranjangarray';
/**
 * Generated class for the TokokategoriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tokokategori',
  templateUrl: 'tokokategori.html',
})
export class TokokategoriPage {
  items:TokokategoriArray[]=[];
  constructor(public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public tokokategoriservice:TokokategoriserviceProvider) {

  }

//Tampil data awal
ionViewDidLoad() {
  //Loading bar
  let loadingdata=this.loadincontroller.create({
    content:"Loading..."
  });
  loadingdata.present();
  //Tampilkan data dari server
  this.tokokategoriservice.tampilkankategori().subscribe(
    //Jika data sudah berhasil di load
    (data:TokokategoriArray[])=>{
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
  
  tomboldetail(item) {
    this.nav.push(TokokategoriDetailPage, { item: item });
  }
}

@Component({
  selector: 'page-tokokategori-detail',
  templateUrl: 'tokokategori-detail.html',
  entryComponents: [ TokokeranjangPage,TokokeranjangCreatePage ],
})
export class TokokategoriDetailPage {
  item;
  id:Number;
  id2:Number;
  namasubkategori:String;
  foto:String;
  items:TokokategoriArray[]=[];
  
  constructor(params: NavParams, public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public tokokategoriservice:TokokategoriserviceProvider,public tokokeranjangservice:TokokeranjangserviceProvider) {
      this.item = params.data.item;
  }

//Tampil data awal
ionViewDidLoad() {
  //Loading bar
  let loadingdata=this.loadincontroller.create({
    content:"Loading..."
  });
  loadingdata.present();
  //Tampilkan data dari server
  this.tokokategoriservice.tampilkandetail(new TokokategoriArray(this.item.id,this.item.namasubkategori,this.item.foto)).subscribe(
    //Jika data sudah berhasil di load
    (data:TokokategoriArray[])=>{
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

tombolbeli(item2) {
  let alert = this.alertCtrl.create({
    title: 'Informasi',
    subTitle: 'Stok Kosong',
    buttons: ['OK']
  });
  if(item2.stok < 1){
    alert.present();
  }
  else{
    this.nav.push(TokokeranjangCreatePage, {item2: item2});
  }
}
}
