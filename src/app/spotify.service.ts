import * as SpotifyWebApi from 'spotify-web-api-js';

export class SpotifyService {
  private spotifyApi = new SpotifyWebApi.default();

  constructor() {
    this.spotifyApi.setAccessToken('');
  }

  getPlaylists() {
    return this.spotifyApi.getUserPlaylists();
  }
}
