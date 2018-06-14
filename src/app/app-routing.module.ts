import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";
import { TopChallengesComponent } from "src/app/top-challenges/top-challenges.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'top-challenges', component: TopChallengesComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
