import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderWaitPageRoutingModule } from './order-wait-routing.module';

import { OrderWaitPage } from './order-wait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderWaitPageRoutingModule
  ],
  declarations: [OrderWaitPage]
})
export class OrderWaitPageModule {}
