import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponent/Home/home.component';
import { TodoItemsComponent } from './MyComponent/todo-items/todo-items.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationComponent } from './MyComponent/navigation/navigation.component';
import { ErrorComponent } from './MyComponent/error/error.component';
import { LoginComponent } from './MyComponent/navigation/login/login.component';
import { RegisterComponent } from './MyComponent/navigation/register/register.component';
import { LogoutComponent } from './MyComponent/navigation/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoItemsComponent,
    AddTodoComponent,
    NavigationComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
