import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NewTramiteComponent } from './pages/new-tramite/new-tramite.component';
import { RegisterComponent } from './pages/register/register.component';
import { TramitesComponent } from './pages/tramites/tramites.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'tramites', component: TramitesComponent },
      { path: 'nuevo-tramite', component: NewTramiteComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: '/tramites',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
