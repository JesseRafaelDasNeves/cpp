import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];

  constructor(private readonly clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.list().subscribe((clientsApi) => {
      this.clients = clientsApi;
    })
  }
}
