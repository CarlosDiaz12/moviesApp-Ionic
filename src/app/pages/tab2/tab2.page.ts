import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../model/Movie';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { MovieDetailsModalPage } from 'src/app/components/movie-details-modal/movie-details-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{
loading: boolean ;
searching: boolean;
searchTerm: string;
topRated: Movie[] = [];
searchMovies: Movie[] = [];
private page = 1;
IMAGE_URL = environment.imageUrl;
  constructor(private movieService: MoviesService, public modalController: ModalController) {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loadTopRated();
 }, 2000);
  }

  loadData(event: any) {
    setTimeout(() => {
      this.loadSearchMovies(false);
      event.target.complete();
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

  loadTopRated() {
    this.movieService.getTopRatedMovies().subscribe(data => {
      this.topRated = data.results;
      this.loading = false;
      console.log(this.topRated);
    });
  }


  onSearchEvent() {
    if (this.searchTerm.length === 0) {
      this.searching = false;
      this.loading = true;
      this.loadTopRated();
    } else {
      this.searching = true;
      this.loadSearchMovies(true);
    }

  }

  loadSearchMovies(firstLoad: boolean = false) {
    this.page = firstLoad === true ? 1 : ++this.page;
    this.movieService.searchMovies(this.searchTerm, this.page).subscribe(data => {
      if (firstLoad) {
        this.searchMovies = data.results;
      } else {
        this.searchMovies = this.searchMovies.concat(data.results);
      }

      this.loading = false;
      console.log(this.searchMovies);
    });
  }

}
