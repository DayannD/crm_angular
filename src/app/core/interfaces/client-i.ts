import { StateClient } from "../enums/state-client"

export interface ClientI {
  companyName: string
  firstName: string
  lastName: string
  email: string
  telephone: string
  address: string
  zipCode: string
  city : string
  country : string
  unitPrice:number
  state: StateClient
  id: number
}
