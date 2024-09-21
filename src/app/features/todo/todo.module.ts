import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../../store/reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from '../../store/effects/todo.effects';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    PrimeNgModule,
    CoreModule,
    StoreModule.forFeature('todoState',todoReducer)
  ],
  providers:[MessageService,ConfirmationService]
})
export class TodoModule { }
