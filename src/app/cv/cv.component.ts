import { Component, OnInit } from '@angular/core';
import { Candidat } from '../Models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  listCandidats: Candidat[] = [
    // new Candidat(1, 'Nidhal', 'Jelassi', 36, 'Enseignant', 'nidhal.jpg'),
    // new Candidat(2, 'Bart', 'Simpson', 14, 'Technicien', 'bart.jpeg'),
    // new Candidat(3, 'Homer', 'Simpson', 56, 'Enseignant', 'homer.jpg'),
  ];
  selectedCandidat: Candidat;

  constructor(
    private firstSer: FirstService,
    private listCand: ListCandidatsService
  ) {}

  ngOnInit(): void {
    this.firstSer.showMessage();
    this.listCandidats = this.listCand.getAllCandidats();
  }

  TraitementDuCv(cand) {
    this.selectedCandidat = cand;
    console.log(this.selectedCandidat);
  }

  addNewCandidat() {
    this.listCand.addCandidat();
  }

  showCandidat() {
    console.log(this.listCand.getAllCandidats());
  }
}
