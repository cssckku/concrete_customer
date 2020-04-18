import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderWaitSendPageRoutingModule } from './order-wait-send-routing.module';

import { OrderWaitSendPage } from './order-wait-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderWaitSendPageRoutingModule
  ],
  declarations: [OrderWaitSendPage]
})
export class OrderWaitSendPageModule {}
