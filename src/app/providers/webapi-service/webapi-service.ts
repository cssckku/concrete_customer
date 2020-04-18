// import { Http, Headers } from '@angular/http';
// import { HttpClient, HttpHeaders, HttpErrorResponse,HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
// import { GlobalProvider } from '../global/global';
import { Storage } from '@ionic/storage';
// import { TranslateService } from '@ngx-translate/core';
// import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class WebapiServiceProvider {
  public base_url = "https://api.concretedeliveryeasy.com/index.php/";

  constructor(
    private toast: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: HttpClient,
    private storage: Storage,
    // private translate: TranslateService,
    // public firebase: AngularFireDatabase,
    // private global: GlobalProvider
  ) {
    //
  }

  async  presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    return await alert.present();
  }
  async presentToast() {
    // const toast = await this.toast.create({
    //   message: this.global.msgStatusCodeAPI_0,
    //   duration: 3000,
    //   position: 'top'
    // });
    // toast.present();
  }
  async Toast(text) {
    const toast = await this.toast.create({
      message: text,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  on_loading() {
    // this.translate.get('wait').subscribe(wait => {
    //   this.on_loading2(wait);
    // });
  }
  async  on_loading2(wait) {
    let loading = await this.loadingCtrl.create({
      message: wait,
      spinner: 'crescent',
      duration: 2000
    });
    return await loading.present();
  }
  // POST Method
  storage_set(key, val) {
    this.storage.set(key, val);
  }
  storage_get(key) {
    return this.storage.get(key);
  }

  postData(segment, objdata) {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      this.storage.get('lang').then((result) => {
        if (!result) {
          result = "th";
        }
        this.http.post(this.base_url + segment + "?lang=" + result, JSON.stringify(objdata))
          .subscribe((res: any) => {
            resolve(res);

          }, (err) => {
            if (err.status == 0) {
              this.presentToast();
              reject(err);
            }
          });
      });
    });
  }
  fb_value(child, func) {
    this.storage.get('data').then((data: any) => {
      // if (data) {
      //   this.firebase.database
      //     .ref(data.id_res_auto + "_" + data.code + "/" + child).on("value", func);
      // }
    });
  }
  fb_set(child) {
    this.storage.get('data').then((data: any) => {
      if (data) {
        // this.firebase.database
        //   .ref(data.id_res_auto + "_" + data.code + "/" + child).set(Math.random());
      }
    });
  }
  billcus(order_id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      // headers.append('Content-Type', this.global.contentType);
      // headers.append('Authorization', this.global.authKey);
      // headers.append('Accept', 'application/json, text/plain, */*');

      // var headers = new Headers();
      // // headers.append("Accept", 'application/json');
      // // // headers.append('Content-Type', 'application/json');
      // // // let headers = new Headers();
      // headers.append('Content-Type', this.global.contentType);
      // headers.append('Authorization', this.global.authKey);


      // let options = new RequestOptions({ headers: headers });
      // this.http.get(this.global.baseUrlApi + segment, { headers: headers }) 
      // this.storage.get('lang').then((result) => {
      //   this.http.get(this.global.baseUrlApi + "bill_cus/" + order_id + "?lang=" + result, { headers: headers })
      //     .subscribe((res: any) => {
      //       resolve(res._body);
      //     }, (err) => {
      //       if (err.status == 0) {
      //         this.presentToast();
      //         reject(err);
      //       }
      //       reject(err);
      //     });
      // });
    });
  }
  getData(segment) {
    return new Promise((resolve, reject) => {
      this.storage.get('lang').then((result) => {
        this.http.get(this.base_url + segment + "?lang=" + result)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            if (err.status == 0) {
              this.presentToast();
              reject(err);
            }
            reject(err);
          });
      });
    });
  }
}
