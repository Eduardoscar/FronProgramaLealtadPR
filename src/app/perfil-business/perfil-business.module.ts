import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilBusinessComponent } from './perfil-business/perfil-business.component';
import { TransactionBusinessComponent } from './transaction-business/transaction-business.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionRegisterComponent } from './transaction-register/transaction-register.component';



@NgModule({
  declarations: [
    PerfilBusinessComponent,
    TransactionBusinessComponent,
    TransactionRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PerfilBusinessModule { }
