import { Component, OnInit } from '@angular/core';
import { TabServerService } from '../tab-server.service';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css'],
})
export class ListServersComponent implements OnInit {
  tabServers = [];
  constructor(private serService: TabServerService) {}

  ngOnInit(): void {
    this.tabServers = this.serService.listServers;
  }
}
