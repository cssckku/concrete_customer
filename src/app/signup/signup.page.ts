import { Component, OnInit, Injectable } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, MenuController } from '@ionic/angular';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: [
    './styles/signup.page.scss'
  ]
})

export class SignupPage implements OnInit {
  signupForm: FormGroup;
  matching_passwords_group: FormGroup;
  validation_messages = {
    "tel": [
      { type: 'required', message: 'Phone is required.' },
      { type: 'pattern', message: 'Enter a valid Phone.' },
      { type: 'minlength', message: 'Phone must be at least 9 characters long.' },
      { type: 'maxlength', message: 'Phone must be at least 10 characters long.' }
    ],

  };

  constructor(
    public router: Router,
    public modalController: ModalController,
    public menu: MenuController,
    public api: WebapiServiceProvider
  ) {


    this.signupForm = new FormGroup({
      'tel': new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(9), Validators.maxLength(10),
        Validators.pattern('[0-9]+')
      ])),

    });
  }

  ngOnInit(): void {
    this.menu.enable(false);
  }



  doSignup(): void {
    console.log(this.signupForm.value);
    this.api.postData('member/add_otp', { tel: this.signupForm.value.tel, type: 1 }).then((res: any) => {
      console.log(res);
      if (res.flag == '0') {
        this.api.Toast(res.error);
      } else {
        this.api.storage_set("otp_phone", this.signupForm.value.tel);
        this.api.storage_set("otp_code", res.code);
        this.api.Toast("ระบบได้ส่ง SMS ไปยังเบอร์ของคุณเรียบร้อยแล้ว");
        setTimeout(() => {
          this.router.navigate(['auth/confirm-password']);
        }, 2000);
      }
    });

  }

}
