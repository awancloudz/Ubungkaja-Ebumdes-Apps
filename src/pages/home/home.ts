import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { KeranjangPage } from '../../pages/keranjang/keranjang';
import { SearchPage } from '../../pages/search/search';
//Tambahkan Provider
import { KategoriserviceProvider } from '../../providers/kategoriservice/kategoriservice';
//Tambahkan Variabel Global
import { KategoriArray } from '../../pages/kategori/kategoriarray';
import { KategoriDetailPage } from '../../pages/kategori/kategori';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  entryComponents: [ KeranjangPage,SearchPage,KategoriDetailPage ],
})
export class HomePage {

  items:KategoriArray[]=[];
  constructor(public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public kategoriservice:KategoriserviceProvider) {

  }
  //Tampil data awal
ionViewDidLoad() {
  //Loading bar
  let loadingdata=this.loadincontroller.create({
    content:"Loading..."
  });
  loadingdata.present();
  //Tampilkan data dari server
  this.kategoriservice.tampilkankategori().subscribe(
    //Jika data sudah berhasil di load
    (data:KategoriArray[])=>{
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

  tombolkeranjang() {
      this.nav.push (KeranjangPage);
  }

  tombolsearch() {
    this.nav.push (SearchPage);
  }

  tomboldetail(item) {
    this.nav.push(KategoriDetailPage, { item: item });
  }

}
