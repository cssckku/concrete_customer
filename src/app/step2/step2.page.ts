import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {


  constructor(public modalController: ModalController, public rout: Router) {

  }
  doLogin() {
  }
  ngOnInit() {

  }
  select(type) {
    this.rout.navigate(['/main/step2-1']);
  }

  next() {
    this.rout.navigate(['/main/step2'])
  }
  back(){
    this.rout.navigate(['/main/step1'])
  }


}
