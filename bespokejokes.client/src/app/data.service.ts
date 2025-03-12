import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constructor } from 'jasmine';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Joke } from './Models/Joke';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  jokes$: BehaviorSubject<Joke[]> = new BehaviorSubject<Joke[]>([]);
  joke$: BehaviorSubject<Joke> = new BehaviorSubject<Joke>({
    jokeID: 1,
    jokeText: '',
    punchLineText: '',
    author: '',
    postDate: new Date,
    updateDate: new Date
  });
  constructor(private http: HttpClient) { }

  createJoke(joke: Joke) {
    this.http.post<Joke>(`/api/Jokes`, joke).subscribe(data => {
      this.joke$.next(data);
    });
  }

  getAllJokes() {
    this.http.get<Joke[]>(`/api/Jokes`).subscribe(data => {
      this.jokes$.next(data);
    });
  }

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke[]>(`/api/Jokes`).subscribe(data => {
      const max = data.length;
      const min = 1;

      let index = Math.floor(Math.random() * (max - min) + min);

      return of(data[index]);

    });
  }

}
