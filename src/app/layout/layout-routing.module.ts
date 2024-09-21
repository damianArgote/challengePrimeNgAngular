import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes=[
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'todo',
        loadChildren: () => import('../features/todo/todo.module').then(m => m.TodoModule)
      },
      {
        path: 'post',
        loadChildren: () => import('../features/post/post.module').then(m => m.PostModule)
      },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
