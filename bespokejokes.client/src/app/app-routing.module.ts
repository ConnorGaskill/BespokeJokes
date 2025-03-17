import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ManageJokesComponent } from './manage-jokes/manage-jokes.component';
import { CreateJokeComponent } from './create-joke/create-joke.component';
import { EditJokeComponent } from './edit-joke/edit-joke.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: HomeComponent },
  { path: 'manage-jokes', component: ManageJokesComponent },
  { path: 'create-joke', component: CreateJokeComponent },
  { path: 'edit-joke', component: EditJokeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
