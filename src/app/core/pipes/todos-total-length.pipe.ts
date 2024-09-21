import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../features/todo/interfaces/todo.interface';

@Pipe({
  name: 'todosTotalLength'
})
export class TodosTotalLengthPipe implements PipeTransform {

  transform(todos:Todo[], completed:boolean): number {
    return todos.filter(todo => todo.completed === completed).length
  }

}
