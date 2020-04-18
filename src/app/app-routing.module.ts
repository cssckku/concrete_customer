import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/walkthrough', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'auth/login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'walkthrough',
    loadChildren: () => import('./walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)
  },
  {

    path: 'walkthrough',
    loadChildren: () => import('./walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)
  },
  {
    path: 'auth/signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'auth/forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'auth/fingerprint',
    loadChildren: () => import('./fingerprint/fingerprint.module').then(m => m.FingerprintPageModule)
  },
  {
    path: 'auth/pin',
    loadChildren: () => import('./pin/pin.module').then(m => m.PinPageModule)
  },
  {
    path: 'auth/confirm-password',
    loadChildren: () => import('./confirm-password/confirm-password.module').then(m => m.ConfirmPasswordPageModule)
  },
  {
    path: 'auth/change-password',
    loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./add-car/add-car.module').then(m => m.AddCarPageModule)
  },
  {
    path: 'notification-detail',
    loadChildren: () => import('./notification-detail/notification-detail.module').then( m => m.NotificationDetailPageModule)
  },
  {
    path: 'auth/add-password',
    loadChildren: () => import('./add-password/add-password.module').then( m => m.AddPasswordPageModule)
  },
 
  // {
  //   path: 'auction',
  //   loadChildren: () => import('./auction/auction.module').then( m => m.AuctionPageModule)
  // },
  // {
  //   path: 'noti-system',
  //   loadChildren: () => import('./noti-system/noti-system.module').then( m => m.NotiSystemPageModule)
  // }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
