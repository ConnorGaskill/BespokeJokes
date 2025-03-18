import { Component, OnInit } from '@angular/core';
import { Joke } from '../Models/Joke';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  jokes$: BehaviorSubject<Joke[]>;

  constructor(private data: DataService) { this.jokes$ = this.data.jokes$ }

  isLoaded: boolean = false;

  
  ngOnInit(): void {
    this.data.getAllJokes();
  }
  setJoke() {
    this.isLoaded = false;
    this.data.getAllJokes();
    console.log(this.jokes$);
  }

}
