import { Component, Input } from '@angular/core';
import { Joke } from '../Models/Joke';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() JokeDetail: Joke = {
      jokeID: 0,
      jokeText: 'test',
      punchLineText: 'test test',
      author: 'me',
      postDate: new Date("25 3 11"),
      updateDate: new Date("25 3 11")
  }

}
