import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotiSystemPage } from './noti-system.page';

const routes: Routes = [
  {
    path: '',
    component: NotiSystemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotiSystemPageRoutingModule {}
