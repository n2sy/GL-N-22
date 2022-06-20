import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() tabCandidat = [];
  @Output() msgToCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  traitementDuListe(cand) {
    this.msgToCv.emit(cand);
  }
}
