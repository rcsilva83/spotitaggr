import { SpotifyClient } from "./spotify.client";

export class Generator {

    constructor(private spotify: SpotifyClient) {}

    async generatePlaylist(playlistId: string, tags: string[]) {
        await this.spotify.getTracksByTags(tags).then(async allTracks => {
            var newPlaylistTracks = this.getRandomSubarray(allTracks, 50)
            await this.spotify.updatePlaylistTracks(playlistId, newPlaylistTracks)
        })
    }

    private getRandomSubarray<Type>(arr: Type[], size: number) : Type[] {
        var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }
}