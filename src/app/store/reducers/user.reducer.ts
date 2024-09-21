import { createReducer, on } from '@ngrx/store';
import { isAuth, login, loginError, loginSuccess, logout } from '../actions/user.actions';
import { User } from '../../core/interfaces/user.interface';


export interface UserState{
  user:User | null;
  error:any;
  isLoading:boolean
}

export const initialUserState: UserState={
  user: null,
  error:null,
  isLoading:false
}

export const userReducer = createReducer(
  initialUserState,
  on(login, (state) => ({
    ...state,
    isLoading:true
  })),
  on(loginSuccess, (state,{user}) => ({
    ...state,
    user,
    error:null,
    isLoading:false
  })),
  on(loginError, (state,{error}) =>({
    ...state,
    error: {...error,message:'Usuario no valido.'},
    isLoading:false
  })),
  on(logout, state => ({...initialUserState})),
  on(isAuth, (state,{user}) => ({
    ...state,
    user,
    error:null,
    isLoading:false
  }))
)
