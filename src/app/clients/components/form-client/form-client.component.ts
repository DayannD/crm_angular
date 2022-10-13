import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Input() public init!: Client;
  @Output() public submitted: EventEmitter<Client>;

  public states: string[];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
      this.submitted = new EventEmitter<Client>();
      this.states = Object.values(StateClient);
   }

  ngOnInit(): void {
    console.log(this.init);
    this.form = this.formBuilder.group({
      companyName: [this.init.companyName, Validators.required],
      firstName: [this.init.firstName, [Validators.required,Validators.minLength(2)]],
      lastName: [this.init.lastName],
      email: [this.init.email],
      telephone: [this.init.telephone],
      address: [this.init.address],
      zipCode: [this.init.zipCode],
      city: [this.init.city],
      country: [this.init.country],
      unitPrice: [this.init.unitPrice],
      state: [this.init.state],
      id: [this.init.id],
    })
  }

  public onSubmit(){
    this.submitted.emit(this.form.value);
  }

}
