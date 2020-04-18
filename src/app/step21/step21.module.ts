import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step21PageRoutingModule } from './step21-routing.module';

import { Step21Page } from './step21.page';
import { CalculateConcreteVolumePage } from '../calculate-concrete-volume/calculate-concrete-volume.page';

@NgModule({
  entryComponents: [CalculateConcreteVolumePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Step21PageRoutingModule
  ],
  declarations: [Step21Page, CalculateConcreteVolumePage],
  exports: [CalculateConcreteVolumePage]
})
export class Step21PageModule { }
