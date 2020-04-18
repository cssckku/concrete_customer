import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ComponentsModule } from '../components/components.module';
import { AddCarPage } from '../add-car/add-car.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    ComponentsModule
  ],
  declarations: [Tab1Page, AddCarPage],
  entryComponents: [AddCarPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1PageModule { }
