import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllService } from './services/all.service';
import { HttpClientModule } from '@angular/common/http';
import { NewTramiteComponent } from './pages/new-tramite/new-tramite.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TramitesComponent,
    MenuComponent,
    NewTramiteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AuthGuard,
    AllService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
