import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    // load using lazyload for better performance
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule), canActivate: [AuthGuard]
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule), canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
