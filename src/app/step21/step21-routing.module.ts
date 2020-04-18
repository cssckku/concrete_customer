import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step21Page } from './step21.page';

const routes: Routes = [
  {
    path: '',
    component: Step21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step21PageRoutingModule {}
