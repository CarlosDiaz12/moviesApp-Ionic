import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/model/Movie';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { MovieDetailsModalPage } from '../../components/movie-details-modal/movie-details-modal.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  momentMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  private page = 1;
  IMAGE_URL = environment.imageUrl;
  slideOptions = {
    slidesPerView: 3.1,
    spaceBetween: 3,
  };
  constructor(private moviesService: MoviesService, public modalController: ModalController) {}
  loading: boolean;
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
      this.loadMomentsMovies();
      this.loadPopularMovies();
    }, 2000);
  }


  async presentModal(movie: Movie) {
    const modal = await this.modalController.create({
      component: MovieDetailsModalPage,
      componentProps: {
        movie
      }
    });
    return await modal.present();
  }

  loadMomentsMovies() {
    this.moviesService.getMomentMovies().subscribe((data) => {
      this.momentMovies = data.results;
      console.log(this.momentMovies);
    });
  }

  loadPopularMovies(firstLoad: boolean = true) {
    this.page = firstLoad ? 1 : ++this.page;
    this.moviesService.getPopularMovies(this.page).subscribe((data) => {
      if (this.page > 1) {
        const tempArr = this.popularMovies.concat(data.results);
        this.popularMovies = tempArr;
        console.log(this.popularMovies);
      } else {
        this.popularMovies = data.results;
        console.log(this.popularMovies);
      }
      this.loading = false;
    });
  }
}
