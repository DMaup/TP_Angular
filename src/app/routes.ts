import {Routes} from '@angular/router';
import {EventsComponent} from './events/events.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'home/events',
    component: EventsComponent
  },

  {
    path: 'home/events/:category',
    component: EventsComponent
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];
