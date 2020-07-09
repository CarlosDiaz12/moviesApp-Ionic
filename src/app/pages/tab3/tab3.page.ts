import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';
import { Movie } from 'src/app/model/Movie';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
favoriteMovies: Movie[];
IMAGE_URL = environment.imageUrl;
slideOptions = {
  slidesPerView: 1.2,
  spaceBetween: 3,
};

  constructor(public localData: LocalDataService) {}
  ngOnInit(): void {
    this.favoriteMovies = this.localData.getFavorites();
  }


  removeFromFavorites(movie: Movie) {
    this.localData.removeFromFavorites(movie);
    console.log('Movie removed from favorite');
  }

}
