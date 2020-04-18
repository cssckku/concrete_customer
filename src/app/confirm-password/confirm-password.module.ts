import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPasswordPageRoutingModule } from './confirm-password-routing.module';

import { ConfirmPasswordPage } from './confirm-password.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    ConfirmPasswordPageRoutingModule
  ],
  declarations: [ConfirmPasswordPage]
})
export class ConfirmPasswordPageModule {}
