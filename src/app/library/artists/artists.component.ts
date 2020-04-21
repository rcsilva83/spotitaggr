import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  artists: SpotifyApi.ArtistObjectFull[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getArtists().then((data) => {
      this.artists = data.artists.items;
    });
  }

}
