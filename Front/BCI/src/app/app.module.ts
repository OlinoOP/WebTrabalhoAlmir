import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ContaComponent } from './conta/conta.component';
import { CartaoComponent } from './cartao/cartao.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { RegistroComponent } from './registro/registro.component'

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    NavbarComponent,
    LoginComponent,
    ContaComponent,
    CartaoComponent,
    TransferenciaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
