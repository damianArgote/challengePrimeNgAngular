import { createAction, props } from '@ngrx/store';
import { User } from '../../core/interfaces/user.interface';


export const login = createAction('[USER] LOGIN',props<{username:string,password:string}>())
export const loginSuccess = createAction('[USER] LOGIN Success',props<{user:User}>())
export const loginError = createAction('[USER] LOGIN Error',props<{error:any}>())
export const isAuth = createAction('[USER] IS AUTH',props<{user:User}>())
export const logout = createAction('[USER] LOGOUT')
