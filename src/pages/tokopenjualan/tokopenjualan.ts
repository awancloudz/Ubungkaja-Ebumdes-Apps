import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController ,ToastController,AlertController } from 'ionic-angular';
//Tambahkan Provider
import { TokopenjualanserviceProvider } from '../../providers/tokopenjualanservice/tokopenjualanservice';
import { TokopenjualanArray } from '../../pages/tokopenjualan/tokopenjualanarray';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the TokopenjualanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokopenjualan',
  templateUrl: 'tokopenjualan.html',
})
export class TokopenjualanPage {

  items:TokopenjualanArray[]=[];

  constructor ( public nav: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public loadincontroller:LoadingController,
              public _toast:ToastController,
              public tokopenjualanservice:TokopenjualanserviceProvider,
              private storage: Storage
              ) {
            }

  ionViewDidLoad() {
    //Loading bar
    let loadingdata=this.loadincontroller.create({
      content:"Loading..."
    });
    loadingdata.present();
    //Tampilkan data dari server
    this.storage.get('id_toko').then((toko) => {
    this.tokopenjualanservice.tampilkanpenjualan(toko).subscribe(
      //Jika data sudah berhasil di load
      (data:TokopenjualanArray[])=>{
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
    });
  }
  penjualandetail(item) {
    this.nav.push(TokopenjualanDetailPage, {item: item});
  }
}


@Component({
  selector: 'page-tokopenjualan',
  templateUrl: 'tokopenjualan-detail.html',
  entryComponents:[ TokopenjualanPage ], 
})
export class TokopenjualanDetailPage {
  item;
  id:Number
  id_warga:Number;
  id_toko:Number;
  subtotal:Number;
  tanggal:String;
  status:String;
  items:TokopenjualanArray[]=[];
  
  constructor(params: NavParams, public nav: NavController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
    public loadincontroller:LoadingController,public _toast:ToastController,public tokopenjualanservice:TokopenjualanserviceProvider) {
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
  this.tokopenjualanservice.tampilkandetail(new TokopenjualanArray(this.item.id,this.item.id_warga,this.item.id_toko,this.item.tanggal,this.item.subtotal,this.item.status))
  .subscribe(
    //Jika data sudah berhasil di load
    (data:TokopenjualanArray[])=>{
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
tombolkirim(item){
    //Loading bar
  let loadingdata=this.loadincontroller.create({
    content:"Loading..."
  });
  loadingdata.present();
  //Tampilkan data dari server
  this.tokopenjualanservice.editpenjualan(new TokopenjualanArray(this.item.id,this.item.id_warga,this.item.id_toko,this.item.tanggal,this.item.subtotal,this.item.status))
  .subscribe(
    //Jika data sudah berhasil di load
    (data:TokopenjualanArray[])=>{
      this.items=data;
      this.nav.push(TokopenjualanPage);
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