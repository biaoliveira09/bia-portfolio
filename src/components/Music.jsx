import { useEffect, useState } from 'react';
import { getPlaylist } from './../utilities/spotify';
import { getRandomTrack } from '../utilities/utils';

export default function Music() {
	const [tracks, setTracks] = useState([]);
	const [randomTrack, setRandomTrack] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPlaylist('4iHa1Vqfvh4kLrp8JjbDeO').then(data => {
			console.log(data.tracks.items);
			setTracks(data.tracks.items);
			setIsLoaded(true);
		});
	}, []);

	useEffect(() => {
		setRandomTrack(getRandomTrack(tracks));
	}, [tracks]);

	console.log(randomTrack);

	return (
		isLoaded && (
			<div>
				Music
				<p>{randomTrack && randomTrack.name}</p>
				{randomTrack && (
					<iframe
						style={{ borderRadius: '12px' }}
						src={randomTrack.external_urls.spotify}
						width="100%"
						height="352"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				)}
			</div>
		)
	);
}
