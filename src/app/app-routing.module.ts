import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './MyComponent/error/error.component';
// import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponent/Home/home.component';
import { LoginComponent } from './MyComponent/navigation/login/login.component';
import { LogoutComponent } from './MyComponent/navigation/logout/logout.component';
import { RegisterComponent } from './MyComponent/navigation/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
