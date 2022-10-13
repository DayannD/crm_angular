import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public id !: number;
  public item !: Order;
  public item$!: Observable<Order>;

  public urlList:string = "/orders";
  public list = "list"

  constructor(private route: ActivatedRoute, private ordersService:OrdersService,private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.item$ = this.ordersService.getOneOrders(this.id)
  }

  public action(item : Order){
    console.log(item);
    this.ordersService.update(item).subscribe(() =>{
      this.router.navigate(['orders'])
    }
    );
  }


}
