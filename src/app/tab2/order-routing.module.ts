import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Page } from './tab2.page';
const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children:
      [
        {
          path: 'order-wait',
          loadChildren: () => import('./order-wait/order-wait.module').then(m => m.OrderWaitPageModule)
        },
        {
          path: 'order-wait-send',
          loadChildren: () => import('./order-wait-send/order-wait-send.module').then(m => m.OrderWaitSendPageModule)
        },
        {
          path: 'order-send',
          loadChildren: () => import('./order-send/order-send.module').then(m => m.OrderSendPageModule)
        },
        {
          path: 'order-cancel',
          loadChildren: () => import('./order-cancel/order-cancel.module').then(m => m.OrderCancelPageModule)
        },     
        {
          path: '',
          redirectTo: 'order-wait',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: 'tab2/order-wait',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule { }
