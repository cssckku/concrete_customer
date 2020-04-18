import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  selected = 0;
  constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    // console.log('ion');
    // this.selected = 0;
    
  }
  page(uri) {
    this.router.navigate(['/main/notification/' + uri]);
    if (uri == 'auction') {
      this.selected = 0;
    } else if (uri == 'noti-system') {
      this.selected = 1;
    }
  }
}
