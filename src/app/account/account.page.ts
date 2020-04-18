import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public router: Router, public api: WebapiServiceProvider) { }
  public data = { member_id: 0, phone: '', name: '', email: '', address: '' };
  ngOnInit() {
    this.api.storage_get('data_login').then((data: any) => {
      this.data = data;
    });
  }
  logout() {
    this.api.storage_set('data_login', null);
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 100);


  }

}
