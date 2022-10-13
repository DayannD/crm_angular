import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public urlAdd: string = "add";
  public add: string = "add";
  public urlEdit:string = "/orders/edit";
  public edit = "edit";

  public headers: string[];

  public collection$ : Observable<Order[]>;
  public states = Object.values(StateOrder);

  constructor(private ordersService: OrdersService) {
      this.title = "c'est good";
      this.headers = ['Type','désignation','bn jours','tjm','total','state'];

      this.collection$ = this.ordersService.collection$;
  }

  ngOnInit(): void {
  }

  public changeTitle(): void{
    this.title = "le titre à changé";
  }

  public changeState(item: Order, event: any) {
    const state = event.target.value;
    this.ordersService.changeState(item, state)
      .subscribe((data) => Object.assign(item, data));
  }

}


