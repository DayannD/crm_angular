import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  companyName!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  telephone!: string;
  address!: string;
  zipCode!: string;
  city !: string;
  country !: string;
  unitPrice = 500;
  state = StateClient.ACTIVE;
  id!: number;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}


