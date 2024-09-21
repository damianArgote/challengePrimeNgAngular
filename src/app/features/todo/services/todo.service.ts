import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoDto } from '../dto/todo.dto';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlBase = `https://jsonplaceholder.typicode.com/todos`
  constructor(private http: HttpClient) { }


  getTodos(){
    return this.http.get<Todo[]>(`${this.urlBase}?_start=0&_limit=20`)
  }

  update(todo:Todo){
    const updatedTodo = new TodoDto(todo.title);
    updatedTodo.completed = todo.completed;
    updatedTodo.userId = todo.userId
    return this.http.put<Todo>(`${this.urlBase}/${todo.id}`,updatedTodo)
  }

  removeById(id:number){
    return this.http.delete(`${this.urlBase}/${id}`);
  }

  addTodo(title:string){
    const newTodo = new TodoDto(title);
    return this.http.post<Todo>(this.urlBase,newTodo)
  }
}
