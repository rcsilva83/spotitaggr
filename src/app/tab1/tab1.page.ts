import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import SpotifyWebApi from 'spotify-web-api-js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
  
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.getPlaylists().then((data) => {
      this.playlists = data.items;
    });
  }

}
