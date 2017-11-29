import { Component } from '@angular/core';
//Tambahkan Provider
import { KategoriserviceProvider } from '../../providers/kategoriservice/kategoriservice';
//Tambahkan Variabel Global
import { KategoriArray } from '../../pages/kategori/kategoriarray';
import { NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';
import { KeranjangPage } from '../../pages/keranjang/keranjang';
/**
 * Generated class for the KategoriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-kategori',
  templateUrl: 'kategori.html',
  entryComponents: [ SearchPage,KeranjangPage ],
})
export class KategoriPage {
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
  
  tomboldetail(item) {
    this.nav.push(KategoriDetailPage, { item: item });
  }

  tombolsearch () {
    this.nav.push (SearchPage);
  }

  tombolkeranjang () {
    this.nav.push (KeranjangPage);
  }
}

@Component({
  selector: 'page-kategori',
  templateUrl: 'kategori-detail.html',
  entryComponents: [ SearchPage,KeranjangPage ],
})
export class KategoriDetailPage {
  item;
  id:Number;
  namasubkategori:String;
  foto:String;
  items:KategoriArray[]=[];
 
  constructor(params: NavParams, public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public kategoriservice:KategoriserviceProvider) {
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
  this.kategoriservice.tampilkandetail(new KategoriArray(this.item.id,this.item.namasubkategori,this.item.foto)).subscribe(
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

  tombolsearch () {
    this.nav.push (SearchPage);
  }

  tombolkeranjang () {
    this.nav.push (KeranjangPage);
  }
}
