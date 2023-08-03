import { useQuery } from '@tanstack/react-query';
import { FiRefreshCw } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';
import { getPlaylist } from '../utilities/spotify';
import { getRandomTrack, getTrackArtists } from '../utilities/utils';
import MusicAlert from './MusicAlert';
import Reveal from '../utilities/Reveal';

const EMBEDDABLE_URL = 'https://open.spotify.com/embed/track/';

export default function Music({ playlistId }) {
	const iframeRef = useRef(null);

	const [randomTrack, setRandomTrack] = useState([]);
	const [artists, setArtists] = useState('');
	const [tracks, setTracks] = useState([]);
	const [playlistName, setPlaylistName] = useState('');
	const [playlistExternalUrls, setPlaylistExternalUrls] = useState({});
	const [recentlyPlayed, setRecentlyPlayed] = useState([]);

	const {
		isError,
		isSuccess,
		data: playlistData,
	} = useQuery({
		queryKey: ['playlist', playlistId],
		queryFn: () => getPlaylist(playlistId),
	});

	useEffect(() => {
		if (isSuccess) {
			const { name, external_urls } = playlistData;
			setPlaylistName(name);
			setPlaylistExternalUrls(external_urls);
			setTracks(playlistData.tracks.items);
		}
	}, [playlistData, isSuccess]);

	useEffect(() => {
		if (tracks) {
			const newRandomTrack = getRandomTrack(tracks);
			setRandomTrack(newRandomTrack);
			setArtists(getTrackArtists(newRandomTrack));
		}
	}, [tracks]);

	const handleChangeSongClick = () => {
		const oneHourAgo = Date.now() - 3600000;
		const availableTracks = tracks.filter(track => {
			const trackId = track.track.id;
			const playedTrack = recentlyPlayed.find(
				playedTrack => playedTrack.id === trackId
			);
			return !playedTrack || playedTrack.timestamp < oneHourAgo;
		});
		if (availableTracks.length === 0) {
			setRecentlyPlayed([]);
			return;
		}

		const newRandomTrack = getRandomTrack(availableTracks);
		setRandomTrack(newRandomTrack);
	};

	useEffect(() => {
		if (randomTrack && randomTrack.id) {
			setArtists(getTrackArtists(randomTrack));

			setRecentlyPlayed(prev => [
				...prev,
				{ id: randomTrack.id, timestamp: Date.now() },
			]);
		}
	}, [randomTrack]);

	useEffect(() => {
		window.onSpotifyIframeApiReady = function () {
			const embed = new Spotify.EmbedController('spotify-embed');
			embed.loadUri(`spotify:track:${randomTrack.id}`);
		};

		return () => {
			window.onSpotifyIframeApiReady = null;
		};
	}, [randomTrack]);

	if (isError) {
		return;
	}

	if (isSuccess) {
		return (
			<>
				<Reveal>
					<section
						id="music"
						className="music mx-5 mb-20 h-5/6 sm:mx-auto sm:pt-32 lg:mb-32"
					>
						<h2 className="pb-3 text-2xl font-bold">
							Currently Listening To...
						</h2>
						<div className="rounded-xl bg-stone-50/30 px-7 pb-7 pt-8 shadow">
							<div className="flex h-[185px] flex-col justify-between sm:h-[135px] md:h-[130px] lg:h-[120px]">
								<p>
									Listen to one of my favourite tracks{' '}
									<span className="font-bold">
										{randomTrack && randomTrack.name}
									</span>{' '}
									by {artists}, randomly selected from my playlist{' '}
									<a
										href={playlistExternalUrls.spotify}
										className="underline hover:text-orange-500"
										target="_blank"
										rel="noreferrer"
									>
										{playlistName}
									</a>{' '}
									using the Spotify API.
								</p>

								<button
									className="m-auto mb-4 mt-3 flex items-center gap-2 rounded bg-pink-600 px-3 py-1 text-lg text-stone-100 shadow-md transition-colors hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-lg hover:duration-75 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-800"
									onClick={handleChangeSongClick}
								>
									Change Song <FiRefreshCw className="h-5 w-5" />
								</button>
							</div>

							{randomTrack && (
								<div id="embed-iframe" ref={iframeRef}>
									<iframe
										style={{
											borderRadius: '12px',
											backgroundColor: 'transparent',
										}}
										src={EMBEDDABLE_URL + randomTrack.id}
										height="240"
										width="100%"
										frameBorder="0"
										allowFullScreen=""
										allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
										loading="lazy"
										title={`Spotify Embed of ${randomTrack.name}}`}
									></iframe>
								</div>
							)}
						</div>
					</section>
				</Reveal>

				<MusicAlert
					track_name={randomTrack && randomTrack.name}
					artists={artists}
				/>
			</>
		);
	}
}
