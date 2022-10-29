import * as SaleActions from './Sale.actions';
const initialState: { isHasASale: boolean } = {
  isHasASale: false,
};
export function SaleReducer(state = initialState, action: SaleActions.SetSale) {
  switch (action.type) {
    case SaleActions.SET_HAS_A_SALE:
      state = { isHasASale: !action.payload };
      return;
    default:
      return state;
  }
}
