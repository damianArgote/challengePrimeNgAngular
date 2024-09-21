import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers';


export const selectUserState = createFeatureSelector<UserState>('user');

export const stateUser = createSelector(
  selectUserState,
  (state: UserState) => state
);
