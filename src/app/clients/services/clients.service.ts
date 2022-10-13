import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private urlApi: string;
  // public collection$: Observable<Client[]>
  public collection$: BehaviorSubject<Client[]>
  public status!: string;

  constructor(private httpClient: HttpClient,private router: Router) {
    this.urlApi = environment.urlApi;
    this.collection$ = new BehaviorSubject<Client[]>([]);
    this.refreshCollection()
    // this.collection$ = this.httpClient.get<Client[]>(this.urlApi + '/clients');
  }

  public refreshCollection() {
    this.httpClient.get<Client[]>(`${this.urlApi}/clients/`).subscribe((data) => {
      this.collection$.next(data);
    })
  }

  public changeState(item: Client, state: StateClient): Observable<Client>{
    const obj = new Client(item);
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Client): Observable<Client>{
    return this.httpClient.put<Client>(`${this.urlApi}/clients/${item.id}`, item).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public add(item: Client): Observable<Client>{
    return this.httpClient.post<Client>(`${this.urlApi}/clients`, item).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public getOneClients(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.urlApi}/clients/${id}`);
  }

  public delete(id: number): Observable<Client> {
    return this.httpClient.delete<Client>(`${this.urlApi}/clients/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }


}
