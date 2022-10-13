import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  public id !: number;
  public item !: Client;
  public item$!: Observable<Client>;

  constructor(private route: ActivatedRoute,private clientsService:ClientsService,private router: Router) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.item$ = this.clientsService.getOneClients(this.id)
    // this.clientsService.getOneClients(this.id).subscribe((data) => {
    //   this.item = data;
    //   console.log(this.item);
    // });
  }

  public action(item: Client) {
    console.log(this.item);
    this.clientsService.update(item).subscribe(() =>{
      this.router.navigate(['clients']);
    });
  }
}
