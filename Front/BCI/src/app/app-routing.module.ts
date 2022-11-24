import { ModuleWithProviders, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartaoComponent } from './cartao/cartao.component';
import { ContaComponent } from './conta/conta.component';
import { LoginComponent } from './login/login.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { RegistroComponent } from './registro/registro.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';

const routes: Routes = [
  {path:'', component: PaginaInicialComponent},
  {path:'login', component: LoginComponent},
  {path:'conta', component: ContaComponent},
  {path:'cartao', component: CartaoComponent},
  {path:'transferencia', component: TransferenciaComponent},
  {path:'registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
