import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './MyComponent/error/error.component';
// import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponent/Home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
