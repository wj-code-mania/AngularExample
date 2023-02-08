import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { TodoTestComponent } from './todo-test/todo-test.component';
import { TodoInputFormComponent } from './todo-input-form/todo-input-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { RxTestComponent } from './rx-test/rx-test.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    ContentWrapperComponent,
    TodoTestComponent,
    TodoInputFormComponent,
    TodoListComponent,
    TodoItemComponent,
    RxTestComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
