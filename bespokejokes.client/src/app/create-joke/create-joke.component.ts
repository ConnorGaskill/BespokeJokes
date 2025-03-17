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
    jokeId: -1,
    jokeText: 'test',
    punchLineText: 'test test',
    author: 'me',
    postDate: new Date("2025 3 11"),
    updateDate: new Date(0)
  }

  onSubmit() {

    this.joke = this.jokeFormGroup.value;
    this.joke.postDate = new Date();

    //this.dataService.createJoke(this.joke);
    console.log(this.joke.author);
  }



}
