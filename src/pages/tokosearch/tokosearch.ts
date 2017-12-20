import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Searchbar,AlertController } from 'ionic-angular';
import { TokosearchArray } from '../../pages/tokosearch/tokosearcharray';
//Tambahkan Provider
import { TokosearchserviceProvider } from '../../providers/tokosearchservice/tokosearchservice';
import { TokokeranjangPage,TokokeranjangCreatePage2 } from '../../pages/tokokeranjang/tokokeranjang';
import { query } from '@angular/core/src/animation/dsl';
/**
 * Generated class for the TokosearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokosearch',
  templateUrl: 'tokosearch.html',
})
export class TokosearchPage {
  query: string = '';
  id:Number;
  namaproduk:String;
  kategori:String;
  items:TokosearchArray[]=[];
  items2:TokosearchArray[]=[];
  @ViewChild('searchbar') searchbar:Searchbar;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public tokosearchservice:TokosearchserviceProvider) {
  }

  ionViewDidEnter() {
    setTimeout(()=>{
        this.searchbar.setFocus();
    }, 150);
  }

  cariproduk(){
    if(this.query.length > 0 ) {
      let input = this.query;
      //Tampilkan data dari server
      this.tokosearchservice.cariproduk(new TokosearchArray(this.id,input,this.kategori)).subscribe(
        //Jika data sudah berhasil di load
        (data:TokosearchArray[])=>{
          //this.items=data;
          this.items = [];
          this.items2 = [];
          data.forEach((data) => {
            this.items.push(data);
            this.items2.push(data);
          });
        },
        //Jika Error
        function (error){  
        },
        //Tutup Loading
        function(){

        }
      );
    } else {
        this.items = [];
        this.items2 = [];
    }
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
      this.navCtrl.push(TokokeranjangCreatePage2, {item2: item2});
    }
  }
}
