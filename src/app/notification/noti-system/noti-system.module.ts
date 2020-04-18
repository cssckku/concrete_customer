import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotiSystemPageRoutingModule } from './noti-system-routing.module';

import { NotiSystemPage } from './noti-system.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotiSystemPageRoutingModule
  ],
  declarations: [NotiSystemPage]
})
export class NotiSystemPageModule {}
