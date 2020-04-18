import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public selected = 0;
  constructor(public router: Router) { }
  page(uri) {
    this.router.navigate(['/main/tab2/' + uri]);
    if (uri == 'order-wait') {
      this.selected = 0;
    } else if (uri == 'order-wait-send') {
      this.selected = 1;
    }
    else if (uri == 'order-send') {
      this.selected = 2;
    }
    else if (uri == 'order-cancel') {
      this.selected = 3;
    }
  }

}
