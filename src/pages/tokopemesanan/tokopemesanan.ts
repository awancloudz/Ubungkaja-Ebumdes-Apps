import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
//Tambahkan Provider
import { TokopemesananserviceProvider } from '../../providers/tokopemesananservice/tokopemesananservice';
import { TokopemesananArray } from '../../pages/tokopemesanan/tokopemesananarray';
/**
 * Generated class for the TokopemesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokopemesanan',
  templateUrl: 'tokopemesanan.html',
})
export class TokopemesananPage {

  items:TokopemesananArray[]=[];

  constructor ( public nav: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public loadincontroller:LoadingController,
              public _toast:ToastController,
              public tokopemesananservice:TokopemesananserviceProvider
              ) {
            }

  ionViewDidLoad() {
    //Loading bar
    let loadingdata=this.loadincontroller.create({
      content:"Loading..."
    });
    loadingdata.present();
    //Tampilkan data dari server
    this.tokopemesananservice.tampilkanpemesanan().subscribe(
      //Jika data sudah berhasil di load
      (data:TokopemesananArray[])=>{
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

  tokopemesanandetail (item) {
    this.nav.push (TokopemesananDetailPage, {item: item});
  }
}

@Component({
  selector: 'page-create-pemesanan',
  templateUrl: 'tokopemesanan.html',
})
export class TokopemesananCreatePage {
  item2;
  id:Number
  id_toko:Number;
  id_distributor:Number;
  subtotal:Number;
  tanggal:String;
  status:String;
  items:TokopemesananArray[]=[];
  constructor(public params: NavParams,public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public tokopemesananservice:TokopemesananserviceProvider) {
      this.item2 = params.data.item2;
  }

  //Tampil data awal
ionViewDidLoad(item2) {
  this.id_toko = this.item2.toko;
  this.id_distributor = this.item2.distributor;
  this.subtotal = this.item2.subtotal;
  this.status = this.item2.status;
  var tanggalan = new Date().toLocaleDateString();
  this.tanggal = tanggalan;
    //Pemberitahuan
    let alert = this.alertCtrl.create({
      title: 'Informasi',
      subTitle: 'Pemesanan Sukses,silahkan menunggu hingga barang datang.',
      buttons: ['OK']
    });
    //Loading Data
    let loadingdata=this.loadincontroller.create({
        content:"Memproses pemesanan..."
    });
    loadingdata.present();
    //Mengambil value dari input field untuk dimasukkan ke UsulanArray
    this.tokopemesananservice.tambahpemesanan(new TokopemesananArray(this.id,this.id_toko,this.id_distributor,this.tanggal,this.subtotal,this.status))
    .subscribe(
      (data:TokopemesananArray)=>{
        //Push
        loadingdata.dismiss();
        this.nav.setRoot(TokopemesananPage);
      },
      function(error){

      },
      function(){
        alert.present();
      }
    );
  }
}

@Component({
  selector: 'page-tokopemesanan',
  templateUrl: 'tokopemesanan-detail.html',
})
export class TokopemesananDetailPage {
  item;
  id:Number
  id_toko:Number;
  id_distributor:Number;
  subtotal:Number;
  tanggal:String;
  status:String;
  items:TokopemesananArray[]=[];
  
  constructor(params: NavParams, public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public tokopemesananservice:TokopemesananserviceProvider) {
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
  this.tokopemesananservice.tampilkandetail(new TokopemesananArray(this.item.id,this.item.id_toko,this.item.id_distributor,this.item.tanggal,this.item.subtotal,this.item.status)).subscribe(
    //Jika data sudah berhasil di load
    (data:TokopemesananArray[])=>{
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
}
