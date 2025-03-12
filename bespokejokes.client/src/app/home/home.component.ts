import { Component, OnInit } from '@angular/core';
import { Joke } from '../Models/Joke';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) {}

  joke: Joke = {
      jokeID: 0,
      jokeText: 'test',
      punchLineText: 'test test',
      author: 'me',
      postDate: new Date("2025 3 11"),
      updateDate: new Date("2025 3 11")
  }
  ngOnInit(): void {
    this.joke = this.data.getRandomJoke();
  }
}
