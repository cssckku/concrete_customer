import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';
import { Router } from '@angular/router';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.page.html',
  styleUrls: ['./add-password.page.scss'],
})
export class AddPasswordPage implements OnInit {

  matching_passwords_group: FormGroup;

  loginForm: FormGroup;

  validation_messages = {
    password: [
      { type: 'required', message: 'Password is required.' },

    ],
    confirm_password: [
      { type: 'required', message: 'Confirm Password is required.' },
      // { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
  constructor(public router: Router, public api: WebapiServiceProvider) {
    this.loginForm = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areNotEqual(formGroup);
    });
  }

  ngOnInit() {
  }
  doLogin() {
    console.log(this.loginForm.value);
    this.api.storage_get('otp_phone').then((val: any) => {
      let data = this.loginForm.value;
      data.phone = val;
      this.api.postData("member/add_password", data).then((result: any) => {
        console.log(result);
        if (result.flag == '1') {
          this.api.Toast("บันทึกข้อมูลเรียบร้อยแล้ว");
          setTimeout(() => {
            this.router.navigate(['auth/login']);
          }, 1000);
        } else {
          this.api.Toast("รหัสผ่านไม่ตรงกัน");
        }
      });
    });

  }
}
