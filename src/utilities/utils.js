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

export function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
