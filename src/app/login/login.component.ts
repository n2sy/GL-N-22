import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultSection = 'dsen';
  myCommentaire = 'Rien à signaler...';
  showError = false;
  constructor(
    private http: HttpClient,
    private loginSer: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.http.get('https://jsonpllllaceholder.typicode.com/users').subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Flux terminé !');
    //   },
    // });
  }

  submitHandler(f) {
    console.log(f);
    this.loginSer.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('GLN_TOKEN', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.showError = true;
        f.reset();
        console.log(err);
      },
    });
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
