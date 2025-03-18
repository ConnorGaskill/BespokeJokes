import { Component, OnInit } from '@angular/core';
import { emptyJoke, Joke } from '../Models/Joke';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, isEmpty, pipe } from 'rxjs';

@Component({
  selector: 'app-edit-joke',
  standalone: false,
  templateUrl: './edit-joke.component.html',
  styleUrl: './edit-joke.component.css'
})
export class EditJokeComponent implements OnInit {

  jokeFormGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private fb : FormBuilder) {

    this.joke$ = this.dataService.joke$;
    this.joke$.subscribe((jok: Joke) => {
      this.joke = jok;
      console.log(this.isFound)
      if (jok.jokeText !== '') {
        this.isFound = true;
      }
      console.log(jok);
      this.jokeFormGroup.patchValue({
        jokeText: this.joke.jokeText,
        punchLineText: this.joke.punchLineText,
        author: this.joke.author
      })


    });
    this.jokeFormGroup = this.fb.group({
      jokeText: [''],
      punchLineText: [''],
      author : ['']
    });
  }
  ngOnInit(): void {
    this.jokeFormGroup.patchValue({
      jokeText: this.joke.jokeText,
      punchLineText: this.joke.punchLineText,
      author: this.joke.author
    })
  }

  joke$: BehaviorSubject<Joke>;
  isFound: boolean = false;
  joke: Joke = emptyJoke;



  search(num: string) {
    this.isFound = false;
    this.dataService.getJokeById(Number(num));

  }

  onSubmit() {
    this.joke.updateDate = new Date();
    const updatedJoke: Joke = { ...this.joke, ...this.jokeFormGroup.value };

    console.log(updatedJoke);

    this.dataService.updateJokeById(updatedJoke.jokeId, updatedJoke);
    

    }

  Delete() {
    console.log(`deleting ${this.joke}...`);
    this.dataService.deleteJokeById(this.joke.jokeId);
  }

}
