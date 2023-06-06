// require('dotenv').config();

/**
 * Get access token from Spotify API
 *
 * @see https://developer.spotify.com/documentation/web-api/tutorials/getting-started
 *
 * @returns {object}
 */
async function getToken() {
	const r = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'client_credentials',
			client_id: import.meta.env.VITE_CLIENT_ID,
			client_secret: import.meta.env.VITE_CLIENT_SECRET,
		}),
	});
	return await r.json();
}

/**
 * Get artist by id
 *
 * @param {string} id
 * @returns {object}
 */
export async function getPlaylist(id) {
	const { access_token } = await getToken();
	const r = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
		headers: {
			authorization: `Bearer ${access_token}`,
		},
	});
	return await r.json();
}

// run
// (async () => {
// 	const artistId = '0OdUWJ0sBjDrqHygGUXeCF';
// 	const artist = await getArtist(artistId);

// 	console.log(artist);
// })();
