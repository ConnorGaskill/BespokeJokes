import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { emptyJoke, Joke } from '../Models/Joke';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';
import { FormState } from '../Models/FormState'
@Component({
  selector: 'app-manage-jokes',
  standalone: false,
  templateUrl: './manage-jokes.component.html',
  styleUrl: './manage-jokes.component.css'
})
export class ManageJokesComponent implements OnInit {
  jokeFormGroup: FormGroup = new FormGroup({
    jokeId: new FormControl(''),
    jokeText: new FormControl(''),
    punchLineText: new FormControl(''),
    author: new FormControl('')
  });
  formState: FormState = FormState.edit;

  test: Number = 1;

  joke: Joke = emptyJoke;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router) {
    this.router.events.subscribe(routerevent => {
      if (routerevent instanceof NavigationEnd) {
        this.getJokeData();
      }
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  getJokeData(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.joke.jokeId = +paramMap.get('id')!;
    })
  }

  initForm(): void {
    this.jokeFormGroup.patchValue({
      jokeText: new FormControl(this.joke.jokeText),
      punchLineText: new FormControl(this.joke.punchLineText),
      author: new FormControl(this.joke.author)
    })
  }
  onSubmit() {
    console.log(this.formState);
  }
}
