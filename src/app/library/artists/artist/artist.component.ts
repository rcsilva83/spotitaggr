import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  albums: SpotifyApi.AlbumObjectSimplified[];

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.spotifyService.getArtistAlbums(this.route.snapshot.params['id']).then((data) => {
      this.albums = data.items;
    });
  }

}
