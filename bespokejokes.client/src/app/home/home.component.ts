import { Component, OnInit } from '@angular/core';
import { Joke } from '../Models/Joke';
import { DataService } from '../data.service';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }

  joke: Joke = {
      jokeId: 0,
      jokeText: 'test',
      punchLineText: 'test test',
      author: 'me',
      postDate: new Date("2025 3 11"),
      updateDate: new Date("2025 3 11")
  }
  ngOnInit(): void {
    this.data.getAllJokes();
    this.data.jokes$.pipe(tap(jokearr => [this.data.getRandomJoke(jokearr)])).subscribe(jokes => {
    });
    this.data.jokes$.subscribe(jokes => {
      this.joke = this.data.getRandomJoke(jokes);
    });
  }
}
