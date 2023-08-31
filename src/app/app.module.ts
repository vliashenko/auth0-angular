import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from '@auth0/auth0-angular';

import { HomepageComponent } from './homepage/homepage.component';
import { environment } from '../environments/environment';

console.log(environment)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...environment.auth
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
