import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../../model/Movie';
import { environment } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-slide-pair-movies',
  templateUrl: './slide-pair-movies.page.html',
  styleUrls: ['./slide-pair-movies.page.scss'],
})
export class SlidePairMoviesPage implements OnInit {
  @Input() popularMovies: Movie[] = [];
  @Output() loadMore = new EventEmitter();
  @Output() showModal = new EventEmitter();
  slideOptions = {
    slidesPerView: 3.3,
    spaceBetween: -20
  };
  IMAGE_URL = environment.imageUrl;
  constructor() { }

  ngOnInit() {
  }

  modalShow(movie: Movie) {
    this.showModal.emit(movie);
  }

  loadMoreMovies() {
    this.loadMore.emit();
  }

}
