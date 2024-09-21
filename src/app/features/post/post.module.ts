import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../../store/reducers';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRoutingModule,
    PrimeNgModule,
    CoreModule,
    StoreModule.forFeature('postState',postReducer)
  ],
  providers:[MessageService,ConfirmationService]
})
export class PostModule { }
