import { Action } from '@ngrx/store';

export const START_FETCHING = 'START_FETCHING';

export class StartFetching implements Action {
  type: string = START_FETCHING;
}

export const STOP_FETCHING = 'STOP_FETCHING';

export class StopFetching implements Action {
  type: string = STOP_FETCHING;
}

export const ERROR_HAPPEND = 'ERROR_HAPPEND';

export class ErrorHappend implements Action {
  type: string = ERROR_HAPPEND;
}

export const CLEAR_ERROR = 'CLEAR_ERROR';

export class ClearError implements Action {
  type: string = CLEAR_ERROR;
}
