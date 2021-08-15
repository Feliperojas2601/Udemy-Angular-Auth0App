import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { appRouting } from './app.routes';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button-component/auth-button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule, 
    appRouting, 
    AuthModule.forRoot({
      domain: 'dev-dr0zmato.us.auth0.com',
      clientId: 'IZXt8MmiIpyZHk0zQ6ofEyIFeAwivG3w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
