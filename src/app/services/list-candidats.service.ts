import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private listCandidats: Candidat[] = [
    // new Candidat(1, 'Nidhal', 'Jelassi', 36, 'Enseignant', 'nidhal.jpg'),
    // new Candidat(2, 'Bart', 'Simpson', 14, 'Technicien', 'bart.jpeg'),
    // new Candidat(3, 'Homer', 'Simpson', 56, 'Enseignant', 'homer.jpg'),
  ];
  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.listCandidats;
  }

  getAllCandidatsAPI() {
    return this.http.get(this.link);
  }

  addCandidat(newC) {
    newC._id = this.listCandidats[this.listCandidats.length - 1]._id + 1;
    this.listCandidats.push(newC);
  }

  addCandidatAPI(newC) {
    // let myToken = localStorage.getItem('GLN_TOKEN');
    // if (myToken) {
    //   let headers = new HttpHeaders().set('Authorization', `bearer ${myToken}`);
    //   return this.http.post(this.link, newC, { headers });
    // }
    return this.http.post(this.link, newC);
  }

  getCandidatById(id) {
    return this.listCandidats.find((c) => c._id == id);
  }

  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  deleteCandidat(cand) {
    let i = this.listCandidats.indexOf(cand);
    this.listCandidats.splice(i, 1);
  }

  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  updateCandidat(uCand) {
    let i = this.listCandidats.indexOf(uCand);
    this.listCandidats[i] = uCand;
  }

  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand['_id']}`, uCand);
  }
}
