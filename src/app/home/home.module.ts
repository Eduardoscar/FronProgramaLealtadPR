import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionUserComponent } from './transaction-user/transaction-user.component';



@NgModule({
  declarations: [
    MenuHomeComponent,
    MenuAdminComponent,
    MenuUserComponent,
    PerfilComponent,
    AllUsersComponent,
    CreateUserComponent,
    TransactionUserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[MenuHomeComponent,
    MenuAdminComponent,
    MenuUserComponent,
    PerfilComponent]
})
export class HomeModule { }
