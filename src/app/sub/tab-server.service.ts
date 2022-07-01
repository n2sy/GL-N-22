import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabServerService {
  listServers = [
    {
      id: 1,
      nom: 'Serveur de déploiment',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Serveur de test',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Serveur de Développement',
      statut: 'online',
    },
  ];
  constructor() {}

  getServerById(id) {
    return this.listServers.find((serv) => serv.id == id);
  }
}
