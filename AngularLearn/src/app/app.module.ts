//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { ChildComponent } from './child.component';
import { CommentsComponent } from './comments.component';
import { HomehomeComponent } from './homehome/homehome.component';
import { UseruserComponent } from './useruser/useruser.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LowerCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChildComponent,
    CommentsComponent,
    HomehomeComponent,
    UseruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    LowerCasePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
