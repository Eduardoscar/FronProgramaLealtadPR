import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { BusinessModule } from './business/business.module';
import { PerfilBusinessModule } from './perfil-business/perfil-business.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    HomeModule,
    BusinessModule,
    PerfilBusinessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
