// src/app/store/dark-mode/dark-mode.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../features/auth/services/auth.service';
import { login, loginError, loginSuccess } from '../actions/user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private authService: AuthService) {}

  login$= createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(action =>
        this.authService.login(action.username,action.password).pipe(
          map( user => {
            localStorage.setItem('token',user.token!)
            return loginSuccess({user})
          }),
          catchError(error => of(loginError({error})))
        )
      )
    ))

}
