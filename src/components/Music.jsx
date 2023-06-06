import { useEffect, useState } from 'react';
import { getPlaylist } from './../utilities/spotify';
import { getRandomTrack } from '../utilities/utils';

const EMBEDDABLE_URL = 'https://open.spotify.com/embed/track/';

export default function Music() {
	const [playlist, setPlaylist] = useState([]);
	const [tracks, setTracks] = useState([]);
	const [randomTrack, setRandomTrack] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPlaylist('4iHa1Vqfvh4kLrp8JjbDeO').then(data => {
			setPlaylist(data);
			console.log(data);
			setTracks(data.tracks.items);
			setIsLoaded(true);
		});
	}, []);

	useEffect(() => {
		setRandomTrack(getRandomTrack(tracks));
	}, [tracks]);

	return (
		isLoaded && (
			<section className="music">
				<h2 className="text-2xl font-bold">Music</h2>
				<p>
					Listen to one of my favourite tracks{' '}
					<span className="font-bold">{randomTrack && randomTrack.name}</span>{' '}
					by ..... randomly selected from my playlist {playlist.name} using the
					Spotify API. Refresh the page to listen to another track.
				</p>
				{/* {randomTrack.artists.map(artist => {
					console.log(artist.name);
				})} */}
				{randomTrack && (
					<iframe
						style={{ borderRadius: '12px' }}
						src={EMBEDDABLE_URL + randomTrack.id}
						width="100%"
						height="200"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				)}
			</section>
		)
	);
}
