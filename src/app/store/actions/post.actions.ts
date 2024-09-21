import { createAction, props } from '@ngrx/store';
import { Post } from '../../features/post/interfaces/post.interfaces';


export const getPosts = createAction('[POST] GET POSTS')
export const getPostsSuccess = createAction('[POST] GET POSTS SUCCESS', props<{posts:Post[]}>())
export const getPostsError = createAction('[POST] GET POSTS ERROR', props<{error:any}>())

export const updatePost = createAction('[POST] UPDATE POST',props<{post:Post}>());
export const updatePostSuccess = createAction('[POST] UPDATE POST SUCCESS',props<{post:Post}>());
export const updatePostError = createAction('[POST] UPDATE POST ERROR',props<{error:any}>());

export const removePost = createAction('[POST] REMOVE POST',props<{id:number}>());
export const removePostSuccess = createAction('[POST] REMOVE POST SUCCESS',props<{id:number}>());
export const removePostError = createAction('[POST] REMOVE POST ERROR',props<{error:any}>());

export const addPost = createAction('[POST] ADD POST',props<{title:string,body:string}>());
export const addPostSuccess = createAction('[POST] ADD POST SUCCESS',props<{post:Post}>());
export const addPostError = createAction('[POST] ADD POST ERROR',props<{error:any}>());

export const clearPosts = createAction('[POST] CLEAR POST')

export const filterTitle = createAction('[POST] FILTER POST TITLE',props<{title:string}>())
