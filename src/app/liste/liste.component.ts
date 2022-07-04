import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  tabCandidat = [];
  @Output() msgToCv = new EventEmitter();
  constructor(private listCand: ListCandidatsService) {}

  ngOnInit(): void {
    this.tabCandidat = this.listCand.getAllCandidats();
  }

  traitementDuListe(cand) {
    this.msgToCv.emit(cand);
  }

  showCandidat() {
    console.log(this.listCand.getAllCandidats());
  }
}
