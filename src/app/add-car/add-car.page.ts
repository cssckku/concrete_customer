import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  back() {
    this.modalController.dismiss();
  }
  select(type) {
    this.modalController.dismiss({ type: type });
  }

}
