import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from '../interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie: Movie;
  @Input() darkTheme = false;
  @Output() moreDetails: EventEmitter<Movie> = new EventEmitter<Movie>();

  handleClick() {
    this.moreDetails.emit(this.movie);
  }

  changeTheme() {
    if (this.darkTheme) {
      this.darkTheme = false;
    } else {
      this.darkTheme = true;
    }
  }
}
