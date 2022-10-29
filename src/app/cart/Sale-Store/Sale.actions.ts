import { Action } from '@ngrx/store';

export const SET_HAS_A_SALE = 'SET_HAS_A_SALE';

export class SetSale implements Action {
  readonly type: string = SET_HAS_A_SALE;
  constructor(public payload?: boolean) {}
}
