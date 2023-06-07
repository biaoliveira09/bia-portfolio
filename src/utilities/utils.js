export function getRandomTrack(tracks) {
	if (tracks.length === 0) {
		return null;
	}
	const randomIndex = Math.floor(Math.random() * tracks.length);
	return tracks[randomIndex].track;
}

export function getTrackArtists(track) {
	if (track && track.artists) {
		return track.artists.map(artist => artist.name).join(', ');
	}
	return '';
}
