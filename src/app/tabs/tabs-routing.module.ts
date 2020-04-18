import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'main',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'step1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'step2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../step2/step2.module').then(m => m.Step2PageModule)
          }
        ]
      },
      {
        path: 'step2-1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../step21/step21.module').then(m => m.Step21PageModule)
          }
        ]
      }, {
        path: 'step3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../step3/step3.module').then(m => m.Step3PageModule)
          }
        ]
      }, {
        path: 'order-success',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../order-success/order-success.module').then(m => m.OrderSuccessPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notification/notification.module').then(m => m.NotificationPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/main/step1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
