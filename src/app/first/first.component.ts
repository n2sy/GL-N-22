import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  prenom = 'Omar';
  club = 'Real Madrid';
  bg = 'pink';
  hd = false;
  constructor() {}

  ngOnInit(): void {}

  showAlert() {
    alert('Click détecté !');
  }

  traitementDuParent(msg) {
    //alert(msg);
    //this.club = msg;
  }

  traitement2(msg) {
    console.log(msg);
  }
}
