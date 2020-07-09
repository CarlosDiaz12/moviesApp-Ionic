import { Injectable } from '@angular/core';
import { Movie } from '../model/Movie';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  favorites: Movie[] = [];
  hasFavorites: boolean;
  constructor(private storage: Storage) {
    this.loadAllFavorites();
   }

   saveMovie(movie: Movie): boolean {
    if (this.hasFavorites) {
      const exists = this.favorites.find((a) => a.id === movie.id);
      if (!exists) {
        this.favorites.unshift(movie);
        this.storage.set('movies', this.favorites).then(() => {
          return true;
        }).catch((err) => {
          console.log(err);
          return false;
        });
      }
    } else {
      this.favorites.unshift(movie);
      this.storage.set('movies', this.favorites).then(() => {
        return true;
      }).catch((err) => {
        console.log(err);
        return false;
      });
    }
    return false;
  }

  isFavorite(movie: Movie): boolean {
    return this.favorites.findIndex(a => a.id === movie.id) === -1 ? false : true;
  }

  getFavorites(): Movie[] {
    return this.favorites;
  }

  removeFromFavorites(movie: Movie) {
    const articleToRemove = this.favorites.findIndex(a => a.id === movie.id);
    this.favorites.splice(articleToRemove, 1);
    this.storage.set('movies', this.favorites);
  }

  async loadAllFavorites() {
    const value = await this.storage.get('movies');
    if (value) {
        this.favorites = value;
        this.hasFavorites = true;
      }
  }
}
