import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientModel } from "../models/client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private URL_BASE = `${ environment.url_base }`;

  constructor(private http: HttpClient) { }

  public getClients(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(`${ this.URL_BASE }/Client/Clients`);
  }

  public getClientById(id: number): Observable<ClientModel> {
     return this.http.get<ClientModel>(`${ this.URL_BASE }/Client/Client/${ id }`);
  }

  public saveClient(Client: ClientModel): Observable<ClientModel> {
    return this.http.post<ClientModel>(`${ this.URL_BASE }/Client/Save`, Client);
  }

  public updateClient(Client: ClientModel): Observable<ClientModel> {
    return this.http.put<ClientModel>(`${ this.URL_BASE }/Client/Update`, Client);
  }

  public deleteClient(id: number): Observable<ClientModel> {
    return this.http.delete<ClientModel>(`${ this.URL_BASE }/Client/Remove/${id}`);
  }
}
