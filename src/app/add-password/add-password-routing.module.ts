import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPasswordPage } from './add-password.page';

const routes: Routes = [
  {
    path: '',
    component: AddPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPasswordPageRoutingModule {}
