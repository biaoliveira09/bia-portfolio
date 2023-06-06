export function getRandomTrack(tracks) {
	if (tracks.length === 0) {
		return null;
	}
	const randomIndex = Math.floor(Math.random() * tracks.length);
	return tracks[randomIndex].track;
}
