import {ActionReducerMap} from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState{
  userState: reducers.UserState,
  darkModeState: reducers.DarkModeState
}

export const appReducers: ActionReducerMap<AppState>= {
  userState: reducers.userReducer,
  darkModeState: reducers.darkModeReducer
}
