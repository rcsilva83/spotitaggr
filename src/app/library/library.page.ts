import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import SpotifyWebApi from 'spotify-web-api-js';

@Component({
  selector: 'app-library',
  templateUrl: 'library.page.html',
  styleUrls: ['library.page.scss']
})
export class LibraryPage implements OnInit {
  playlists: SpotifyApi.PlaylistObjectSimplified[];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.getPlaylists().then((data) => {
      this.playlists = data.items;
    });
  }

  segmentChanged(event: any) {
    if (event.detail.value === 'playlists') {
      console.log('Show playlists');
    } else {
      console.log('Show artists');
    }
  }
}
