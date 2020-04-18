import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculateConcreteVolumePage } from './calculate-concrete-volume.page';

const routes: Routes = [
  {
    path: '',
    component: CalculateConcreteVolumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculateConcreteVolumePageRoutingModule {}
