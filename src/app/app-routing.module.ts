import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RxTestComponent } from './rx-test/rx-test.component';
import { TodoTestComponent } from './todo-test/todo-test.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: IndexComponent,
  },
  {
    path: 'todo',
    component: TodoTestComponent,
  },
  {
    path: 'rxtest',
    component: RxTestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
