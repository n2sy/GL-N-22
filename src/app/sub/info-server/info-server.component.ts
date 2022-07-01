import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabServerService } from '../tab-server.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrls: ['./info-server.component.css'],
})
export class InfoServerComponent implements OnInit {
  oneServer;
  showButton;
  constructor(
    private activRoute: ActivatedRoute,
    private serService: TabServerService
  ) {}

  ngOnInit(): void {
    this.activRoute.paramMap.subscribe({
      next: (p) => {
        this.oneServer = this.serService.getServerById(p.get('id'));
      },
    });

    this;
    this.activRoute.queryParamMap.subscribe({
      next: (q) => {
        this.showButton = q.get('allow') == '1' ? false : true;
      },
    });
  }
}
