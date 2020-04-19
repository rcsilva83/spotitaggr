import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import SpotifyWebApi from 'spotify-web-api-js';

@Component({
  selector: 'app-library',
  templateUrl: 'library.page.html',
  styleUrls: ['library.page.scss']
})
export class LibraryPage implements OnInit {
  currentSegment = 'playlists';

  constructor() {}

  ngOnInit() {
  }
}
