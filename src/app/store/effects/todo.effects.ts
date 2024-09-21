// src/app/store/dark-mode/dark-mode.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  addTodo,
  addTodoError,
  addTodoSuccess,
  getTodos,
  getTodosError,
  getTodosSuccess,
  removeTodo,
  removeTodoError,
  removeTodoSuccess,
  updateTodo,
  updateTodoError,
  updateTodoSuccess
} from '../actions/todo.actions';
import { TodoService } from '../../features/todo/services/todo.service';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => getTodosSuccess({ todos })),
          catchError((error) => of(getTodosError({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodo),
      mergeMap((action) =>
        this.todoService.update(action.todo).pipe(
          map((todo) => updateTodoSuccess({ todo })),
          catchError((error) => of(updateTodoError({ error })))
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      mergeMap((action) =>
        this.todoService.addTodo(action.title).pipe(
          map((todo) => addTodoSuccess({ todo })),
          catchError((error) => of(addTodoError({ error })))
        )
      )
    )
  );

  removeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeTodo),
      mergeMap((action) =>
        this.todoService.removeById(action.id).pipe(
          map(() => removeTodoSuccess({ id: action.id })),
          catchError((error) => of(removeTodoError({ error })))
        )
      )
    )
  );
}
