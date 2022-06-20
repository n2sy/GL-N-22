import { Component, OnInit } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  listCandidats: Candidat[] = [
    new Candidat(1, 'Nidhal', 'Jelassi', 36, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'Bart', 'Simpson', 14, 'Technicien', 'bart.jpeg'),
    new Candidat(3, 'Homer', 'Simpson', 56, 'Enseignant', 'homer.jpg'),
  ];
  selectedCandidat: Candidat;
  constructor() {}

  ngOnInit(): void {}

  TraitementDuCv(cand) {
    this.selectedCandidat = cand;
    console.log(this.selectedCandidat);
  }
}
