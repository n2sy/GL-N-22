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

  addCandidat() {
    this.listCandidats.push(
      new Candidat(3, 'New', 'Candidat', 56, 'Enseignant', 'homer.jpg')
    );
  }
}
