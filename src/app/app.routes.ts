import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    { path: 'protegida', component: ProtegidaComponent, canActivate:[AuthGuard] },
    { path: '**', pathMatch:'full', redirectTo:'home' }
];

export const appRouting = RouterModule.forRoot(routes);