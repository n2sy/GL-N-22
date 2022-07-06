import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  selectedCandidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    // v1 avec snapshot
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(id);

    //v2 avec paramMap
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.selectedCandidat = response;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      // error : () => {

      // },
      // complete : () => {

      // }
    });
  }

  deleteHandler() {
    if (confirm('Etes-vous sûr de vouloir supprimer cette personne ? ')) {
      this.candSer.deleteCandidatAPI(this.selectedCandidat['_id']).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
      });
    }
  }
}
