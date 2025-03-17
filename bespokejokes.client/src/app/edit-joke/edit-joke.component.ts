import { Component } from '@angular/core';
import { Joke } from '../Models/Joke';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-edit-joke',
  standalone: false,
  templateUrl: './edit-joke.component.html',
  styleUrl: './edit-joke.component.css'
})
export class EditJokeComponent {

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
      jokeText: '',
      punchLineText: '',
      author: '',
      postDate: new Date(0),
      updateDate: new Date(0)
  }

  isFound: Boolean = false;

  search(num: string) {

    this.isFound = false;


    this.dataService.getJokeInfoById(Number(num));
    if (this.dataService.joke$ == null) {
      return;
    }
    console.log('this',this.dataService.joke$.subscribe((jok: Joke) => jok));
    this.dataService.joke$.subscribe(pipe((jok: Joke) => this.joke = jok
    ));
    this.isFound = true;
    console.log(this.joke);
    console.log(this.isFound);
    
  }

  onSubmit() {

  }



}
