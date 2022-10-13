import { StateOrder } from "../enums/state-order"

export interface OrderI {
  id: number
  typePresta: string
  designation: string
  nbDays: number
  unitPrice: number
  state: StateOrder
  orderClient_id: number;
}
