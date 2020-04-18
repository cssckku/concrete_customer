import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalculateConcreteVolumePage } from '../calculate-concrete-volume/calculate-concrete-volume.page';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-step21',
  templateUrl: './step21.page.html',
  styleUrls: ['./step21.page.scss'],
})
export class Step21Page implements OnInit {
  h_auto = false;
  constructor(public router: Router,
    public modalController: ModalController) {

  }
 

  ngOnInit() {

  }
  back() {
    this.router.navigate(['/main/step2']);
  }
  next() {
    this.router.navigate(['/main/step3']);
  }
  agreement() {

  }
  calculate(page: any) {


  
  }
  async calculate2() {

    const modal = await this.modalController.create({
      component: CalculateConcreteVolumePage
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data);
      });
    return await modal.present();
  }
  show_more() {
    this.h_auto = true;
  }
}
