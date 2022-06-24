import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../Models/candidat';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() candidatSelected: Candidat;
  constructor(private RecSer: ListRecruesService) {}

  ngOnInit(): void {}

  addNewRecrue() {
    this.RecSer.addRecrue(this.candidatSelected);
  }
}
