import { createAction, props } from '@ngrx/store';
import { Todo } from '../../features/todo/interfaces/todo.interface';

export const getTodos = createAction('[TODO] GET TODOS')
export const getTodosSuccess = createAction('[TODO] GET TODOS SUCCESS', props<{todos: Todo[]}>())
export const getTodosError = createAction('[TODO] GET TODOS ERROR', props<{error:any}>())

export const updateTodo = createAction('[TODO] UPDATE TODO',props<{todo:Todo}>());
export const updateTodoSuccess = createAction('[TODO] UPDATE TODO SUCCESS',props<{todo:Todo}>());
export const updateTodoError = createAction('[TODO] UPDATE TODO ERROR',props<{error:any}>());

export const removeTodo = createAction('[TODO] REMOVE TODO',props<{id:number}>());
export const removeTodoSuccess = createAction('[TODO] REMOVE TODO SUCCESS',props<{id:number}>());
export const removeTodoError = createAction('[TODO] REMOVE TODO ERROR',props<{error:any}>());

export const addTodo = createAction('[TODO] ADD TODO',props<{title:string}>());
export const addTodoSuccess = createAction('[TODO] ADD TODO SUCCESS',props<{todo:Todo}>());
export const addTodoError = createAction('[TODO] ADD TODO ERROR',props<{error:any}>());

export const clearTodos = createAction('[TODO] CLEAR TODO')

