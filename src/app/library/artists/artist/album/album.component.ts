import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  tracks: SpotifyApi.TrackObjectSimplified[];

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.spotifyService.getAlbumTracks(this.route.snapshot.params['id']).then((data) => {
      this.tracks = data.items;
    });
  }

}
