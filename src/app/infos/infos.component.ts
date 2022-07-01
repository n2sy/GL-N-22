import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // v1 avec snapshot
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(id);

    //v2 avec paramMap
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        console.log(p.get('id'));
      },
      // error : () => {

      // },
      // complete : () => {

      // }
    });
  }
}
