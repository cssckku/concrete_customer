import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculateConcreteVolumePageRoutingModule } from './calculate-concrete-volume-routing.module';

import { CalculateConcreteVolumePage } from './calculate-concrete-volume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculateConcreteVolumePageRoutingModule
  ],
  declarations: [CalculateConcreteVolumePage]
})
export class CalculateConcreteVolumePageModule {}
