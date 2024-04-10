import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';

//We have configure the routing here for components
const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
