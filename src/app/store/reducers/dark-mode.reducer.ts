import { createReducer, on } from '@ngrx/store';
import { enableDarkMode, disableDarkMode } from '../actions/dark-mode.actions';

export interface DarkModeState {
  isDarkMode: boolean;
}

export const initialState: DarkModeState = {
  isDarkMode:false
};

export const darkModeReducer = createReducer(
  initialState,
  on(enableDarkMode, (state) => ({...state,isDarkMode:true})),
  on(disableDarkMode, (state) => ({...state,isDarkMode:false})),
);
