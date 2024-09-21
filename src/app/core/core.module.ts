import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanToStringPipe } from './pipes/boolean-to-string.pipe';
import { TodoFilterPipe } from './pipes/todo-filter.pipe';
import { TodosTotalLengthPipe } from './pipes/todos-total-length.pipe';



@NgModule({
  declarations: [
    BooleanToStringPipe,
    TodoFilterPipe,
    TodosTotalLengthPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[BooleanToStringPipe,TodoFilterPipe,TodosTotalLengthPipe]
})
export class CoreModule { }
