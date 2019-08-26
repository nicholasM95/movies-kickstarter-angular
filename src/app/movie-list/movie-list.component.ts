import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MoviesService) {
  }

  movies$: Observable<any>;

  getMovies() {
    this.movies$ = this.movieService.getMovies$();
  }

  showMoreDetails(movie) {
    alert(movie.overview);
  }

  ngOnInit(): void {
    this.getMovies();
  }

}
