import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business/business.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { BusinessGuard } from './guards/business.guard';
import { UserGuard } from './guards/user.guard';
import { AllUsersComponent } from './home/all-users/all-users.component';
import { CreateUserComponent } from './home/create-user/create-user.component';
import { MenuAdminComponent } from './home/menu-admin/menu-admin.component';
import { MenuHomeComponent } from './home/menu-home/menu-home.component';
import { MenuUserComponent } from './home/menu-user/menu-user.component';
import { PerfilComponent } from './home/perfil/perfil.component';
import { LoginComponent } from './login/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PerfilBusinessComponent } from './perfil-business/perfil-business/perfil-business.component';

const routes: Routes = [
  {path:"", redirectTo: '/home', pathMatch: 'full'}, //home 
  {path:"login", component: LoginComponent },
  {path:"home",component:MenuHomeComponent},
  {path:"home-user", component:MenuUserComponent,canActivate: [AuthGuard,UserGuard]},
  {path:"home-admin", component:MenuAdminComponent,canActivate: [AuthGuard,AdminGuard]},
  {path:"home-business", component:PerfilBusinessComponent,canActivate: [AuthGuard,BusinessGuard]},
  {path:"usuarios", component:AllUsersComponent,canActivate: [AuthGuard,AdminGuard]},
  {path:"registro", component:CreateUserComponent,canActivate: [AuthGuard,AdminGuard]},
  {path:"perfil",component:PerfilComponent},
  {path:"business",component:BusinessComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
