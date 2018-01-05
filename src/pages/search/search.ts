import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Searchbar,AlertController } from 'ionic-angular';
import { SearchArray } from '../../pages/search/searchArray';
//Tambahkan Provider
import { SearchserviceProvider } from '../../providers/searchservice/searchservice';
import { KeranjangPage,KeranjangcreatePage } from '../../pages/keranjang/keranjang';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  query: string = '';
  id:Number;
  namaproduk:String;
  kategori:String;
  items:SearchArray[]=[];
  items2:SearchArray[]=[];
  @ViewChild('searchbar') searchbar:Searchbar;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public searchservice:SearchserviceProvider) {
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
      this.searchservice.cariproduk(new SearchArray(this.id,input,this.kategori)).subscribe(
        //Jika data sudah berhasil di load
        (data:SearchArray[])=>{
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
      this.navCtrl.push(KeranjangcreatePage, {item2: item2});
    }
  }
}
