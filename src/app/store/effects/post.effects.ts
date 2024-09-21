// src/app/store/dark-mode/dark-mode.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostService } from '../../features/post/services/post.service';
import { addPost, addPostError, addPostSuccess, getPosts, getPostsError, getPostsSuccess, removePost, removePostError, removePostSuccess, updatePost, updatePostError, updatePostSuccess } from '../actions/post.actions';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService:PostService) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => getPostsSuccess({ posts })),
          catchError((error) => of(getPostsError({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePost),
      mergeMap((action) =>
        this.postService.update(action.post).pipe(
          map((post) => updatePostSuccess({ post })),
          catchError((error) => of(updatePostError({ error })))
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) =>
        this.postService.addPost(action.title,action.body).pipe(
          map((post) => addPostSuccess({ post })),
          catchError((error) => of(addPostError({ error })))
        )
      )
    )
  );

  removePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removePost),
      mergeMap((action) =>
        this.postService.removeById(action.id).pipe(
          map(() => removePostSuccess({ id: action.id })),
          catchError((error) => of(removePostError({ error })))
        )
      )
    )
  );
}
