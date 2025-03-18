import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Joke } from '../Models/Joke';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-joke',
  standalone: false,
  templateUrl: './create-joke.component.html',
  styleUrl: './create-joke.component.css'
})
export class CreateJokeComponent {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router) { }

  jokeFormGroup: FormGroup = new FormGroup({
    jokeText: new FormControl(''),
    punchLineText: new FormControl(''),
    author: new FormControl('')
  });

  joke: Joke = {
    jokeId: 0,
    jokeText: 'test',
    punchLineText: 'test test',
    author: 'me',
    postDate: new Date(),
    updateDate: new Date()
  }

  onSubmit() {

    const createdJoke:Joke = {...this.joke, ...this.jokeFormGroup.value}

    this.dataService.createJoke(createdJoke);
    console.log(this.joke.author);
    this.jokeFormGroup.reset();
  }



}
