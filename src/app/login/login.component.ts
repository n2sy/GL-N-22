import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultSection = 'dsen';
  myCommentaire = 'Rien à signaler...';
  constructor() {}

  ngOnInit(): void {}

  submitHandler(f) {
    console.log(f);
  }

  randomPwd(f: NgForm) {
    f.setValue({
      exemple: '',
      login: '',
      password: Math.random().toLocaleString(),
      section: '',
      mycomment: '',
    });
  }
  randomPwd2(f: NgForm) {
    f.form.patchValue({
      password: Math.random().toLocaleString(),
    });
  }

  reset(f: NgForm) {
    f.reset();
  }
}
