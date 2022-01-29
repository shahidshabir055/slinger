import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SmartTableComponent } from './components/smart-table/smart-table.component';

const routes: Routes = [

  {path: "register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"smart-table", component:SmartTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
