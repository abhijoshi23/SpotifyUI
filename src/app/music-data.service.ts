import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';
<<<<<<< HEAD

=======
import { environment } from './../environments/environment';
>>>>>>> 447658680119fd3cdf8b9f395dc63e3142cc4b5e
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MusicDataService {
<<<<<<< HEAD
  favouritesList: Array<any> = [];

=======
>>>>>>> 447658680119fd3cdf8b9f395dc63e3142cc4b5e
  constructor(
    private spotifyToken: SpotifyTokenService,
    private http: HttpClient
  ) {}

  getNewReleases(): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(
          'https://api.spotify.com/v1/browse/new-releases',
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
  }

  getArtistById(id: any): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(`https://api.spotify.com/v1/artists/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
    );
  }

  getAlbumsByArtistId(id: any): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(
          `https://api.spotify.com/v1/artists/${id}/albums`,
          {
            params: {
              include_groups: 'album,single',
              limit: '50',
            },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      })
    );
  }

  getAlbumById(id: any): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(`https://api.spotify.com/v1/albums/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
    );
  }

  searchArtists(searchString: any): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(`https://api.spotify.com/v1/search`, {
          params: {
            q: `${searchString}`,
            type: 'artist',
            limit: '50',
          },
          headers: { Authorization: `Bearer ${token}` },
        });
      })
    );
  }

<<<<<<< HEAD
  addToFavourites(id: any): boolean {
    if (
      id === undefined ||
      id === null ||
      this.favouritesList.length >= 50 ||
      this.favouritesList.includes(id)
    ) {
      return false;
    } else {
      this.favouritesList.push(id);
      return true;
    }
  }

  removeFromFavourites(id: any): Observable<any> {
    this.favouritesList.splice(this.favouritesList.indexOf(id), 1);
    return this.getFavourites();
  }

  getFavourites(): Observable<any> {
    if (this.favouritesList.length > 0) {
      return this.spotifyToken.getBearerToken().pipe(
        mergeMap((token) => {
          return this.http.get<any>(`https://api.spotify.com/v1/tracks`, {
            headers: { Authorization: `Bearer ${token}` },
            params: {
              ids: this.favouritesList.join(','),
            },
          });
        })
      );
    } else {
      return new Observable((o) => {
        o.next([]);
      });
    }
  }
=======
  addToFavourites(id: string): Observable<[String]> {
    // TODO: make a PUT request to environment.userAPIBase/favourites/:id to add id to favourites
    return this.http.put<[string]>(
      `${environment.userAPIBase}/favourites/${id}`,
      id
    );
  }

  removeFromFavourites(id: string): Observable<any> {
    return this.http
      .delete<[String]>(`${environment.userAPIBase}/favourites/${id}`)
      .pipe(
        mergeMap((favouritesArray) => {
          // TODO: Perform the same tasks as the original getFavourites() method, only using "favouritesArray" from above, instead of this.favouritesList
          // NOTE: for the empty array, you will need to use o=>o.next({tracks: []}) instead of o=>{o.next([])}
          if (favouritesArray.length > 0) {
            return this.spotifyToken.getBearerToken().pipe(
              mergeMap((token) => {
                return this.http.get<any>(
                  `https://api.spotify.com/v1/tracks?ids=${favouritesArray.join(
                    ','
                  )}`,
                  { headers: { Authorization: `Bearer ${token}` } }
                );
              })
            );
          } else {
            return new Observable((o) => o.next({ tracks: [] }));
          }
        })
      );
  }

  getFavourites(): Observable<any> {
    return this.http
      .get<[String]>(`${environment.userAPIBase}/favourites/`)
      .pipe(
        mergeMap((favouritesArray) => {
          if (favouritesArray.length > 0) {
            return this.spotifyToken.getBearerToken().pipe(
              mergeMap((token) => {
                return this.http.get<any>(
                  `https://api.spotify.com/v1/tracks?ids=${favouritesArray.join(
                    ','
                  )}`,
                  { headers: { Authorization: `Bearer ${token}` } }
                );
              })
            );
          } else {
            return new Observable((o) => o.next({ tracks: [] }));
          }
        })
      );
  }

  
>>>>>>> 447658680119fd3cdf8b9f395dc63e3142cc4b5e
}