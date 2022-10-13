import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  @Input() public init!: Order;
  @Output() public submitted: EventEmitter<Order>;

  public states: string[];
  public orderClient_id!: number[];
  public form!:FormGroup;
  public collection$: Observable<Client[]>;

  constructor(private formBuilder: FormBuilder, private clientsService: ClientsService) {
    console.log("coucou");
    this.submitted = new EventEmitter<Order>();
    this.states= Object.values(StateOrder);
    this.collection$ = clientsService.collection$;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta: [this.init.typePresta, Validators.required],
      designation: [this.init.designation, [Validators.required,Validators.minLength(2)]],
      nbDays: [this.init.nbDays],
      unitPrice: [this.init.unitPrice],
      state: [this.init.state],
      id: [this.init.id],
      orderClient_id: [this.init.orderClient_id,Validators.required]
    })
  }

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }
}
