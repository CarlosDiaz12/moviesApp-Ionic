import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from '../../model/Movie';
import { environment } from 'src/environments/environment';
import { LocalDataService } from '../../services/local-data.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.page.html',
  styleUrls: ['./movie-details-modal.page.scss'],
})
export class MovieDetailsModalPage implements OnInit {
  @Input() movie: Movie;
  isFavorite: boolean;
  IMAGE_URL = environment.imageUrl;
  constructor(public modalController: ModalController, private localData: LocalDataService, public toastController: ToastController) { }

  ngOnInit() {
     this.isFavorite = this.localData.isFavorite(this.movie);
  }


  addToFavorites(movie: Movie) {
    this.localData.saveMovie(movie);
    this.isFavorite = true;
    this.presentToast('Movie added to favorites');
    console.log('Movie saved');
  }

  removeFromFavorites(movie: Movie) {
    this.localData.removeFromFavorites(movie);
    this.isFavorite = false;
    this.presentToast('Movie deleted from favorites');
    console.log('Movie removed from favorite');
  }
  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'light'
    });
    toast.present();
  }
}
