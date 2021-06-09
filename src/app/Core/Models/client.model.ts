import {Compte} from './compte.model';

export interface Client {
  id?: number
  lastName?: string
  firstName?: string
  email?: string
  phone?: string
  address?: string
  compts?: Compte[]
}
