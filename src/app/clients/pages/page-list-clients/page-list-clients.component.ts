import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public urlAdd:string = "add";
  public add = "add"

  public urlEdit:string = "edit";
  public edit = "edit"

  public headers: string[];
  public collection$: Observable<Client[]>;
  public states = Object.values(StateClient);

  constructor(
    private clientsService:ClientsService,
    private router: Router
  ) {
      this.headers = [
        "companyName","firstName","lastName","email","phone",
        "adress","zipCode","city","country","id","state"
      ];

      this.collection$ = clientsService.collection$
      // clientsService.collection$.subscribe((data) =>
      // this.collection = data
      // );
   }

  ngOnInit(): void {
  }

  public changeState(item: Client, event: any){
    const state = event.target.value;
    this.clientsService.changeState(item,state)
      .subscribe((data) => Object
      .assign(item,data));
  }

  public remove(id: number){
    this.clientsService.delete(id).subscribe(()=>{
      this.router.navigate(['/clients']);
    });
  }
}
