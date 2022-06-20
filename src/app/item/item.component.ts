import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() oneCandidat: Candidat;
  @Output() msgToList = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendToList() {
    this.msgToList.emit(this.oneCandidat);
  }
}
