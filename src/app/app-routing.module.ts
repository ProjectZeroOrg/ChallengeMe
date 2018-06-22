import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";
import { TopChallengesComponent } from "src/app/top-challenges/top-challenges.component";
import { PageNotFoundComponent } from "src/app/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'top-challenges', component: TopChallengesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
