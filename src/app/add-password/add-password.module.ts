import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPasswordPageRoutingModule } from './add-password-routing.module';

import { AddPasswordPage } from './add-password.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    AddPasswordPageRoutingModule
  ],
  declarations: [AddPasswordPage]
})
export class AddPasswordPageModule {}
