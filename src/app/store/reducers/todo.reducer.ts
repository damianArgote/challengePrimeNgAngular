import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../features/todo/interfaces/todo.interface';
import { addTodo, addTodoError, addTodoSuccess, clearTodos, getTodos, getTodosError, getTodosSuccess, removeTodo, removeTodoError, removeTodoSuccess, updateTodo, updateTodoError, updateTodoSuccess } from '../actions/todo.actions';

export interface TodoState{
  todos: Todo[];
  error:any;
  isLoading: boolean
}

export const initialTodoState:TodoState ={
  todos:[],
  error:null,
  isLoading:false
}


export const todoReducer = createReducer(
  initialTodoState,
  on(getTodos, state => ({...state, isLoading:true})),
  on(getTodosSuccess, (state,{todos}) =>({
    ...state,
    todos,
    error:null,
    isLoading:false
  })),
  on(getTodosError, (state,{error}) => ({
    ...state,
    error,
    isLoading:false
  })),

  on(removeTodo, state => ({...state, isLoading:true})),
  on(removeTodoSuccess, (state,{id}) => ({
    ...state,
    todos:state.todos.filter(t => t.id !== id),
    error:null,
    isLoading:false
  })),
  on(removeTodoError, (state,{error}) => ({...state,error,isLoading:false})),

  on(addTodo, state => ({...state,isLoading:true})),
  on(addTodoSuccess, (state,{todo}) => ({
    ...state,
    todos: [...state.todos, todo],
    error:null,
    isLoading:false
  })),
  on(addTodoError, (state,{error}) => ({...state,error,isLoading:false})),
  on(clearTodos, state => ({...initialTodoState})),

  on(updateTodo, state => ({...state,isLoading:true})),
  on(updateTodoSuccess, (state,{todo}) => ({
    ...state,
    error:null,
    isLoading:false,
    todos:state.todos.map(t =>{
      if(t.id === todo.id){
        return todo
      }else{
        return t
      }
    })
  })),
  on(updateTodoError, (state,{error}) => ({
    ...state,
    error,
    isLoading:false
  }))
)
