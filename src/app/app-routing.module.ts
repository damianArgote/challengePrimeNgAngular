import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [authGuard]
  },
  {
    path:'auth',
    loadChildren:() => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'**',
    redirectTo:'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
