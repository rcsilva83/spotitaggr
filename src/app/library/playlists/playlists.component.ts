import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  playlists: SpotifyApi.PlaylistObjectSimplified[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getPlaylists().then((data) => {
      this.playlists = data.items;
    });
  }

}
