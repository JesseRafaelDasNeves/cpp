import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private URL_API = 'http://localhost:3000/client';

  constructor(private readonly http: HttpClient) {}

  list(): Observable<Client[]> {
    return this.http.get<Client[]>(this.URL_API);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.URL_API, client);
  }
}
