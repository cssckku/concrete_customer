import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddCarPage } from '../add-car/add-car.page';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  step1: FormGroup;
  ports: Port[];
  port: Port;
  province: any;
  validation_messages = {
    province: [
      { type: 'required', message: 'เลือกจังหวัดก่อน' },
    ],
    subdistrict: [
      { type: 'required', message: 'เลือกแขวง/ตำบลก่อน' },
    ],
    district: [
      { type: 'required', message: 'เลือกเขต/อำเภอก่อน' },
    ],
    address: [
    ]
  };

  constructor(public modalController: ModalController, public rout: Router) {
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
    ];

    this.step1 = new FormGroup({
      'province': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'subdistrict': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'car': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'distric': new FormControl('', Validators.compose([
      ])),
      'address': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }
  doLogin() {
  }
  async select_car() {
    const modal = await this.modalController.create({
      component: AddCarPage
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data);
      });

    return await modal.present();

  }
  back() {
    this.rout.navigate(['/main/home'])
  }
  next() {
    this.rout.navigate(['/main/step2'])
  }


}
