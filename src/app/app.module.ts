import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { AuthService } from 'services/auth.service';
import { StorageService } from 'services/storage.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthService,
    StorageService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
