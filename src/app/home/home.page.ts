import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router: Router, public api: WebapiServiceProvider) { }
  public data = { member_id: 0, phone: '', name: '', email: '', address: '' };
  ngOnInit() {
    this.api.storage_get('data_login').then((data: any) => {
      this.data = data;
    });
  }
  order_now() {
    this.router.navigate(['/main/step1']);
  }
}
