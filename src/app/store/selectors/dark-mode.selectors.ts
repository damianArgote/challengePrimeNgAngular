import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DarkModeState } from '../reducers/dark-mode.reducer';

export const selectDarkModeState = createFeatureSelector<DarkModeState>('darkMode');

export const isDarkModeEnabled = createSelector(
  selectDarkModeState,
  (state: DarkModeState) => state
);
