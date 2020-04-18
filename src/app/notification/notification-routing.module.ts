import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationPage } from './notification.page';
const routes: Routes = [
  {
    path: '',
    component: NotificationPage,
    children:
      [
        {
          path: 'auction',
          loadChildren: () => import('./auction/auction.module').then(m => m.AuctionPageModule)        
           
        },
        {
          path: 'noti-system',
          loadChildren: () => import('./noti-system/noti-system.module').then(m => m.NotiSystemPageModule)       
         
        },

        {
          path: '',
          redirectTo: 'auction',
          pathMatch: 'full'
        }
      ]
  },
  {

    path: 'notification/auction',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationPageRoutingModule {}
