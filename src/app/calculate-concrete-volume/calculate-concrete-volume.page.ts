import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calculate-concrete-volume',
  templateUrl: './calculate-concrete-volume.page.html',
  styleUrls: ['./calculate-concrete-volume.page.scss'],
})
export class CalculateConcreteVolumePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  back() {
    this.modalController.dismiss();
  }

}
