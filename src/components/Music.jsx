import { FiRefreshCw } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { getPlaylist } from './../utilities/spotify';
import { getRandomTrack, getTrackArtists } from '../utilities/utils';
import { FaAsterisk } from 'react-icons/fa';

const EMBEDDABLE_URL = 'https://open.spotify.com/embed/track/';

export default function Music() {
	const [playlist, setPlaylist] = useState([]);
	const [tracks, setTracks] = useState([]);
	const [randomTrack, setRandomTrack] = useState([]);
	const [artists, setArtists] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPlaylist('2LCjcpXT8LRmsZfJk2QRYe').then(data => {
			setPlaylist(data);
			setTracks(data.tracks.items);
			setIsLoaded(true);
			console.log(data.external_urls.spotify);
		});
	}, []);

	const { name, external_urls } = playlist;

	useEffect(() => {
		setRandomTrack(getRandomTrack(tracks));
	}, [tracks]);

	useEffect(() => {
		if (randomTrack) {
			setArtists(getTrackArtists(randomTrack));
		}
	}, [randomTrack]);

	return (
		isLoaded && (
			<>
				<section id="music" className="music my-20 h-5/6">
					<h2 className="pb-3 text-2xl font-bold">Currently Listening To...</h2>
					<div className="rounded-xl bg-translucent  px-7 pb-0 pt-8 shadow">
						<p>
							Listen to one of my favourite tracks{' '}
							<span className="font-bold">
								{randomTrack && randomTrack.name}
							</span>{' '}
							by {artists} randomly selected from my playlist{' '}
							<a
								href={external_urls.spotify}
								className="underline hover:text-orange-500"
								target="_blank"
								rel="noreferrer"
							>
								{name}
							</a>{' '}
							using the Spotify API.
						</p>

						<button
							className="m-auto mb-4 mt-3 flex items-center gap-2 bg-pink-600 px-3 py-1 text-lg text-stone-100 shadow-md hover:bg-violet-400"
							onClick={() => setRandomTrack(getRandomTrack(tracks))}
						>
							Change Song <FiRefreshCw className="h-5 w-5" />
						</button>
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
					</div>
				</section>
				<div className="music-intro absolute bottom-12 right-12 hidden p-1 text-sm opacity-90 md:block">
					<a href="/#music">
						<div className="align-start flex gap-1">
							<FaAsterisk className="h-4 w-4 text-orange-400 hover:animate-spin" />
							<p className="text-right">
								Currently listening to{' '}
								<span className="font-bold">
									{randomTrack && randomTrack.name}
								</span>{' '}
								<br />
								by {artists}
							</p>
						</div>
					</a>
				</div>
			</>
		)
	);
}
