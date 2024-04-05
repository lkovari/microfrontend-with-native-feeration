import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'microfrontend-a',
        loadComponent: () => loadRemoteModule('microfrontendA', './Component').then((m) => m.AppComponent)
    },    
    {
        path: 'microfrontend-b',
        loadComponent: () => loadRemoteModule('microfrontendB', './Component').then((m) => m.AppComponent)
    },
    {
        path: '**',
        component: NotFoundComponent,
      },
];
