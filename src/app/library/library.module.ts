import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibraryPage } from './library.page';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistDetailsComponent } from './playlists/playlist-details/playlist-details.component';
import { Route } from '@angular/compiler/src/core';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryPage
  },
  {
    path: 'playlist/:id',
    component: PlaylistDetailsComponent
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LibraryPage,
    PlaylistsComponent,
    PlaylistDetailsComponent,
    ArtistsComponent
  ]
})
export class LibraryPageModule {}
