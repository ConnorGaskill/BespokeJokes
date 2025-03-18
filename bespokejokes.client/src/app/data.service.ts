import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Joke } from './Models/Joke';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  jokes$: BehaviorSubject<Joke[]> = new BehaviorSubject<Joke[]>([]);
  joke$: BehaviorSubject<Joke> = new BehaviorSubject<Joke>({
    jokeId: 1,
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
      console.log(data);
      this.jokes$.next(data);
    });
  }

  getRandomJoke(jokes: Joke[]): Joke {
      const max = jokes.length;
      const min = 0;

    let index = Number(Math.floor(Math.random() * (max - min) + min));
    console.log(index);

      return jokes[index];
  }

  getJokeInfoById(id: number): Observable<Joke> {
    return this.http.get<Joke>(`/api/Jokes/${id}`).pipe(
      tap(data => this.joke$.next(data))
    );
  }

  updateJokeById(id: number, joke: Joke) {
    console.log(joke);
    this.http.put<Joke>(`/api/Jokes/${id}`, joke).subscribe(data => {
      this.joke$.next(joke);
    });
  }

  getJokeById(id: number) {
    this.http.get<Joke>(`/api/Jokes/${id}`).subscribe(data => {
      this.joke$.next(data);
    });
  }

  deleteJokeById(id: number) {
    this.http.delete<Joke>(`/api/Jokes/${id}`).subscribe(data => {
      this.joke$.next(data);
    });
  }

}
