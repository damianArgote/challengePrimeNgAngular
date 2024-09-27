import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormlyDemoModule } from '../features/formly-demo/formly-demo.module';


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
      {
        path:'formly-demo',
        loadChildren:() => import('../features/formly-demo/formly-demo.module').then(m => m.FormlyDemoModule)
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
