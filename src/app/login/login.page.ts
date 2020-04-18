import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [
    './styles/login.page.scss'
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  validation_messages = {
    'tel': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'pattern', message: 'Enter a valid Phone.' },
      { type: 'minlength', message: 'Phone must be at least 9 characters long.' },
      { type: 'maxlength', message: 'Phone must be at least 10 characters long.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    public router: Router,
    public menu: MenuController,
    public api: WebapiServiceProvider
  ) {
    this.loginForm = new FormGroup({
      'tel': new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(9), Validators.maxLength(10),
        Validators.pattern('[0-9]+')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  ngOnInit(): void {
    this.menu.enable(false);
  }

  doLogin(): void {
    console.log('do Log In');
    console.log(this.loginForm.value);
    this.api.postData("member/login", this.loginForm.value).then((res: any) => {
      console.log(res);
      if (res.flag == '1') {
        this.api.storage_set("data_login", res.data);
        this.api.Toast("ข้อมูลถูกต้อง กำลังเข้าสู่ระบบ");
        setTimeout(() => {
          this.router.navigate(['main/home']);
        }, 1000);
      } else {
        this.api.Toast("เบอร์โทรศัพท์ หรือ รหัสผ่านไม่ถูกต้อง");

      }
    })

  }

  goToForgotPassword(): void {
    this.router.navigate(['main/home']);
  }

  doFacebookLogin(): void {
    this.router.navigate(['main/home']);
  }

  doGoogleLogin(): void {
    this.router.navigate(['main/home']);
  }

  doTwitterLogin(): void {
    this.router.navigate(['main/home']);
  }
}
