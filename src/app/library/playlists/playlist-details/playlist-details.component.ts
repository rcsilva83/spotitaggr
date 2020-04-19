import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import SpotifyWebApi from 'spotify-web-api-js';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
})
export class PlaylistDetailsComponent implements OnInit {
  tracks: SpotifyApi.PlaylistTrackObject[];

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.spotifyService.getPlaylist(this.route.snapshot.params['id']).then((data) => {
      this.tracks = data.tracks.items;
    });
  }

}
