import { Component, OnInit } from '@angular/core';

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
}
