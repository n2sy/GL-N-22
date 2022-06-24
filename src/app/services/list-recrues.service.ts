import { Injectable } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  tabRecrues: Candidat[] = [];
  constructor() {}

  addRecrue(cand) {
    if (this.tabRecrues.indexOf(cand) == -1) this.tabRecrues.push(cand);
    else alert('Cette personne a déjà été recrutée !');
  }
}
