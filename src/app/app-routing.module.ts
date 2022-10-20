import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FavouritesComponent } from './favourites/favourites.component';
<<<<<<< HEAD

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'artist/:id', component: ArtistDiscographyComponent },
  { path: 'newReleases', component: NewReleasesComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'favourites', component: FavouritesComponent },
=======
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardAuthService } from './guard-auth.service';

const routes: Routes = [
  { path: 'about', component: AboutComponent, canActivate: [GuardAuthService] },
  {
    path: 'album/:id',
    component: AlbumComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'artist/:id',
    component: ArtistDiscographyComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'newReleases',
    component: NewReleasesComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'search',
    component: SearchResultComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
    canActivate: [GuardAuthService],
  },
>>>>>>> 447658680119fd3cdf8b9f395dc63e3142cc4b5e
  { path: '', redirectTo: '/newReleases', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}