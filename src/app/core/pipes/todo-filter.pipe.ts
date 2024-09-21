import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../features/todo/interfaces/todo.interface';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos:Todo[], completed:boolean): Todo[] {
    return todos.filter(todo => todo.completed === completed);
  }

}
