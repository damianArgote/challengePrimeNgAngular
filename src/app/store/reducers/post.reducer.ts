import { createReducer, on } from '@ngrx/store';
import { Post } from '../../features/post/interfaces/post.interfaces';
import { addPost, addPostError, addPostSuccess, clearPosts, filterTitle, getPosts, getPostsError, getPostsSuccess, removePost, removePostError, removePostSuccess, updatePost, updatePostError, updatePostSuccess } from '../actions/post.actions';



export interface PostState{
  posts: Post[];
  error:any;
  isLoading: boolean
}

export const initialPostState:PostState ={
  posts:[],
  error:null,
  isLoading:false
}


export const postReducer = createReducer(
  initialPostState,
  on(getPosts, state => ({...state, isLoading:true})),
  on(getPostsSuccess, (state,{posts}) =>({
    ...state,
    posts,
    error:null,
    isLoading:false
  })),
  on(getPostsError, (state,{error}) => ({
    ...state,
    error,
    isLoading:false
  })),

  on(removePost, state => ({...state, isLoading:true})),
  on(removePostSuccess, (state,{id}) => ({
    ...state,
    posts:state.posts.filter(t => t.id !== id),
    error:null,
    isLoading:false
  })),
  on(removePostError, (state,{error}) => ({...state,error,isLoading:false})),

  on(addPost, state => ({...state,isLoading:true})),
  on(addPostSuccess, (state,{post}) => ({
    ...state,
    posts: [...state.posts, post],
    error:null,
    isLoading:false
  })),
  on(addPostError, (state,{error}) => ({...state,error,isLoading:false})),
  on(clearPosts, state => ({...initialPostState})),

  on(updatePost, state => ({...state,isLoading:true})),
  on(updatePostSuccess, (state,{post}) => ({
    ...state,
    error:null,
    isLoading:false,
    posts:state.posts.map(p =>{
      if(p.id === post.id){
        return post
      }else{
        return p
      }
    })
  })),
  on(updatePostError, (state,{error}) => ({
    ...state,
    error,
    isLoading:false
  })),
  on(filterTitle, (state,{title}) => ({
    ...state,
    posts:state.posts.filter(p => p.title.toLowerCase().includes(title)),
    error:null
  }))
)
