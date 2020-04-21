import { Injectable } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private spotifyService: SpotifyService) { }

  getTags() {
    return this.spotifyService.getPlaylists()
      .then((data) => data.items.filter(p => p.name.startsWith('#')).map(p => p.name));
  }
  saveTag(name: string) {
    if (!name.startsWith('#')) {
      name = `#${name}`;
    }
    this.spotifyService.createPlaylist(name, false);
  }
}
