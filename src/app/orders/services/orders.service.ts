import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject ,Observable, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private urlApi: string;
  public collection$: BehaviorSubject<Order[]>

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = new BehaviorSubject<Order[]>([]);
    this.refreshCollection()
  }

  public refreshCollection() {
    this.httpClient.get<Order[]>(`${this.urlApi}/orders/`).subscribe((data) => {
      this.collection$.next(data);
    })
  }
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  public getOneOrders(id: number): Observable<Order>{
    return this.httpClient.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  public update(item: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.urlApi}/orders/${item.id}`, item).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );

  }

  public add(item: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/orders`, item).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
