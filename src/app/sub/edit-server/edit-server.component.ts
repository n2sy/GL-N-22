import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabServerService } from '../tab-server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  editedServer;
  constructor(
    private activRoute: ActivatedRoute,
    private serService: TabServerService
  ) {}

  ngOnInit(): void {
    this.activRoute.paramMap.subscribe({
      next: (p) => {
        this.editedServer = this.serService.getServerById(p.get('id'));
      },
    });
  }
}
