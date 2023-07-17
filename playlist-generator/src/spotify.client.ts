import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { Page, PlaylistedTrack, Track } from '@spotify/web-api-ts-sdk/dist/mjs/types';

export class SpotifyClient {
    
    private api: SpotifyApi

    constructor(clientId: string, accessToken: string, refreshToken: string) {
        this.api = SpotifyApi.withAccessToken(clientId, {
            access_token: accessToken,
            refresh_token: refreshToken,
            token_type: "Bearer",
            expires_in: 3600
        })
    }

    async getTracksByTags(tags: string[]) {
        console.log(`getTracksByTags(tags = ${tags})`)
        
        let tagsMap = await this.getTagsMap()
        
        let tracks: Track[] = []
        for (let tag of tags) {
            await this.getPlaylistItems(tagsMap.get(tag)!, tracks, 0)
        }
        return tracks
    }

    private async getTagsMap() {
        const page = await this.api.currentUser.playlists.playlists(49);
        return new Map(page.items.filter(playlist => playlist.name.startsWith("#"))
            .map(playlist_1 => [playlist_1.name, playlist_1.id]));
    }

    private async getPlaylistItems(playlistId: string, tracks: Track[], offset: number) {
        let resp = await this.api.playlists.getPlaylistItems(playlistId, undefined, undefined, 49, offset)
        resp.items.map(i => tracks.push((i.track as Track)))

        if (resp.next !== null) {
            await this.getPlaylistItems(playlistId, tracks, offset + resp.items.length)
        }
    }
    
    async updatePlaylistTracks(playlistId: string, newTracks: Track[]) {
        await this.api.playlists.updatePlaylistItems(playlistId, {uris: newTracks.map(t => t.uri)})
    }

}
