import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { DataService } from './data.service';
import { ManageJokesComponent } from './manage-jokes/manage-jokes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateJokeComponent } from './create-joke/create-joke.component';
import { EditJokeComponent } from './edit-joke/edit-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    ManageJokesComponent,
    CreateJokeComponent,
    EditJokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
