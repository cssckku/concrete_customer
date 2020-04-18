import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderWaitPage } from './order-wait.page';

const routes: Routes = [
  {
    path: '',
    component: OrderWaitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderWaitPageRoutingModule {}
