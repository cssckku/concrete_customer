import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['/main/step2-1']);
  }
  next() {
    this.router.navigate(['/main/order-success']);
  }

}
