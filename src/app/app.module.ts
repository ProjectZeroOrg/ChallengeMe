import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopChallengesComponent } from "src/app/top-challenges/top-challenges.component";
import { PageNotFoundComponent } from "src/app/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopChallengesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
