import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomehomeComponent } from './homehome/homehome.component';
import { UseruserComponent } from './useruser/useruser.component';
const routes: Routes = [
  { path: '', component: HomehomeComponent },
  { path: 'user', component: UseruserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
