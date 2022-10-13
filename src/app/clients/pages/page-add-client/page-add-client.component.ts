import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public item: Client;

  constructor(private clientsService: ClientsService,private router: Router) {
    this.item = new Client;
   }

  ngOnInit(): void {
  }

  public action(item: Client) {
    // this.clientsService.add(item).subscribe(() =>{
    //   this.router.navigate(['clients']);
    // });
  }

}
