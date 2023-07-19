import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path:"", component:LandingPageComponent
  },
  {
    path:"user/login", component:LoginComponent
  },
  {
    path:"user/register", component:RegisterComponent
  },
  {
    path:"user/dashboard", component:DashboardComponent, canActivate:[AuthGuardGuard]
  },
  {
    path:"user/transactions", component:TransactionsComponent, canActivate:[AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
