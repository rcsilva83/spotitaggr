import * as SpotifyWebApi from 'spotify-web-api-js';

export class SpotifyService {
  private spotifyApi = new SpotifyWebApi.default();

  constructor() {
    this.spotifyApi.setAccessToken('BQAZY0xzEDpUAq0PdUNYpjDMAiiTIMLlgjpkGzNMZtAXYaJxGoKdlGUI9y69vi1uy1c4uLB9AlxY1o1oCMYUUB12G5d7bEHILaAC4Dy-muoi-R7CbFeXFLvfaE9_27EJ0AylXMOxdg9tpkHryKDOzel0X2JGPitSjkqIaD1p1ysww46coSll-lKkpHtxfCUe8sOq-FSAdPCjfRri_tsYU5G-zIM6VLIS6mtBQYdTLu2K7O5v6tcb_nhsVHap8jzX_FBG8cWEDL8ug_AlOXsb_gCOy07l');
  }

  getPlaylists() {
    return this.spotifyApi.getUserPlaylists();
  }

  getPlaylist(id: string) {
    return this.spotifyApi.getPlaylist(id);
  }

  getArtists() {
    return this.spotifyApi.getFollowedArtists();
  }

  getArtistAlbums(artistId: string) {
    return this.spotifyApi.getArtistAlbums(artistId);
  }

  getAlbumTracks(albumId: string) {
    return this.spotifyApi.getAlbumTracks(albumId);
  }
}
