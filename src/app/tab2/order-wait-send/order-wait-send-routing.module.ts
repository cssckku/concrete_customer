import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderWaitSendPage } from './order-wait-send.page';

const routes: Routes = [
  {
    path: '',
    component: OrderWaitSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderWaitSendPageRoutingModule {}
