import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.page.html',
  styleUrls: ['./confirm-password.page.scss'],
})
export class ConfirmPasswordPage implements OnInit {
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
  public code = ''; l
  constructor(public router: Router, public api: WebapiServiceProvider) {
    api.storage_get('otp_code').then((code) => {
      this.code = code;
    });
    this.signupForm = new FormGroup({
      'tel': new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(6),
        Validators.pattern('[0-9]+')
      ])),

    });
  }
  doSignup() {
    console.log(this.signupForm.value);
    this.api.storage_get('otp_phone').then((val: any) => {
      this.api.postData('member/confirm_otp', { otp: this.signupForm.value.tel, tel: val }).then((result: any) => {
        console.log(result);
        if (result.flag == '1') {
          this.router.navigate(['/auth/change-password']);
        } else {
          this.api.Toast("รหัสไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง หากยังไม่ได้รับให้กดส่งรหัสอีกครั้ง")
        }
      })
    });


  }
  ngOnInit() {
  }
  send_agen() {
    this.api.storage_get('otp_phone').then((val: any) => {
      this.api.postData('member/add_otp', { tel: val, type: 2 }).then((res: any) => {
        console.log(res);
        if (res.flag == '0') {
          this.api.Toast(res.error);
        } else {
          this.api.Toast("ระบบได้ส่ง SMS ไปยังเบอร์ของคุณเรียบร้อยแล้ว");

        }
      });
    });
  }
}
