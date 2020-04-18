import { NotificationDetailPage } from './../../notification-detail/notification-detail.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-noti-system',
  templateUrl: './noti-system.page.html',
  styleUrls: ['./noti-system.page.scss'],
})
export class NotiSystemPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async select() {
    const modal = await this.modalController.create({
      component: NotificationDetailPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }
}
