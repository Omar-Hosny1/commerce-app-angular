import { Action } from '@ngrx/store';
import * as HttpActions from './http-effects.actions';
const initialState = {
  isFetching: false,
  isErrorHappend: false,
};
export function HTTPEffectsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case HttpActions.START_FETCHING:
      return { ...state, isFetching: true };

    case HttpActions.STOP_FETCHING:
      return { ...state, isFetching: false };

    case HttpActions.ERROR_HAPPEND:
      return { ...state, isErrorHappend: true };

    case HttpActions.CLEAR_ERROR:
      return { ...state, isErrorHappend: false };
    default:
      return state;
  }
}
