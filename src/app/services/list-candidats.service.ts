import { Injectable } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private listCandidats: Candidat[] = [
    new Candidat(1, 'Nidhal', 'Jelassi', 36, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'Bart', 'Simpson', 14, 'Technicien', 'bart.jpeg'),
    new Candidat(3, 'Homer', 'Simpson', 56, 'Enseignant', 'homer.jpg'),
  ];
  constructor() {}

  getAllCandidats() {
    return this.listCandidats;
  }

  addCandidat(newC) {
    newC._id = this.listCandidats[this.listCandidats.length - 1]._id + 1;
    this.listCandidats.push(newC);
  }

  getCandidatById(id) {
    return this.listCandidats.find((c) => c._id == id);
  }

  deleteCandidat(cand) {
    let i = this.listCandidats.indexOf(cand);
    this.listCandidats.splice(i, 1);
  }

  updateCandidat(uCand) {
    let i = this.listCandidats.indexOf(uCand);
    this.listCandidats[i] = uCand;
  }
}
