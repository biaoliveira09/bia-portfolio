import { FiRefreshCw } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { getPlaylist } from './../utilities/spotify';
import { getRandomTrack } from '../utilities/utils';

const EMBEDDABLE_URL = 'https://open.spotify.com/embed/track/';

export default function Music() {
	const [playlist, setPlaylist] = useState([]);
	const [tracks, setTracks] = useState([]);
	const [randomTrack, setRandomTrack] = useState([]);
	const [artists, setArtists] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPlaylist('4iHa1Vqfvh4kLrp8JjbDeO').then(data => {
			setPlaylist(data);
			setTracks(data.tracks.items);
			console.log(data);
			setIsLoaded(true);
		});
	}, []);

	useEffect(() => {
		setRandomTrack(getRandomTrack(tracks));
	}, [tracks]);

	return (
		isLoaded && (
			<section className="music my-20">
				<h2 className="text-2xl font-bold">Currently Listening To...</h2>
				<p>
					Listen to one of my favourite tracks{' '}
					<span className="font-bold">{randomTrack && randomTrack.name}</span>{' '}
					by ..... randomly selected from my playlist {playlist.name} using the
					Spotify API.
				</p>

				<button
					className="m-auto mb-4 mt-3 flex items-center gap-2 bg-pink-600 px-3 py-1 text-lg text-stone-100 shadow-md hover:bg-violet-400"
					onClick={() => setRandomTrack(getRandomTrack(tracks))}
				>
					Change Song <FiRefreshCw className="h-5 w-5" />
				</button>
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
