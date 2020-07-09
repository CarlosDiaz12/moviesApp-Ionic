import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../model/Movie';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-slide-backdrop',
  templateUrl: './slide-backdrop.page.html',
  styleUrls: ['./slide-backdrop.page.scss'],
})
export class SlideBackdropPage implements OnInit {
@Input() movies: Movie[] = [];
@Output() showModal = new EventEmitter();
IMAGE_URL = environment.imageUrl;
slideOptions = {
  slidesPerView: 1.1,
  spaceBetween: 10
};
  constructor() { }

  ngOnInit() {
  }

  modalShow(movie: Movie) {
    this.showModal.emit(movie);
  }

}
