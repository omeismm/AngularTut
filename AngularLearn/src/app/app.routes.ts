//app.routes.ts
import { Routes } from '@angular/router';
import { HomehomeComponent } from './homehome/homehome.component';
import { UseruserComponent } from './useruser/useruser.component';
export const routes: Routes = [
  {
    path: '',
    component: HomehomeComponent,
    title: 'App Homehome Page'
  },
  {
    path: 'user',
    component: UseruserComponent,
    title: 'App Useruser Page'
  },
];

