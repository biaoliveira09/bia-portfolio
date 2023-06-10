import { useQuery } from '@tanstack/react-query';
import { FiRefreshCw } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { getPlaylist } from '../utilities/spotify';
import { getRandomTrack, getTrackArtists } from '../utilities/utils';
import MusicAlert from './MusicAlert';

const EMBEDDABLE_URL = 'https://open.spotify.com/embed/track/';

export default function Music({ playlistId }) {
	const [randomTrack, setRandomTrack] = useState([]);
	const [artists, setArtists] = useState('');
	const [tracks, setTracks] = useState([]);
	const [playlistName, setPlaylistName] = useState('');
	const [playlistExternalUrls, setPlaylistExternalUrls] = useState({});

	const playlistQuery = useQuery({
		queryKey: ['playlist', playlistId],
		queryFn: () => getPlaylist(playlistId),
	});

	useEffect(() => {
		if (playlistQuery.isSuccess) {
			const { name, external_urls } = playlistQuery.data;
			setPlaylistName(name);
			setPlaylistExternalUrls(external_urls);
			setTracks(playlistQuery.data.tracks.items);
		}
	}, [playlistQuery.data, playlistQuery.isSuccess]);

	useEffect(() => {
		if (tracks) {
			const newRandomTrack = getRandomTrack(tracks);
			setRandomTrack(newRandomTrack);
			setArtists(getTrackArtists(newRandomTrack));
		}
	}, [tracks]);

	const handleChangeSongClick = () => {
		setRandomTrack(getRandomTrack(tracks));
	};

	if (playlistQuery.isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<section id="music" className="music my-20 h-1/2 sm:h-1/4 md:h-3/4">
				<h2 className="pb-3 text-2xl font-bold">Currently Listening To...</h2>
				<div className="rounded-xl bg-translucent  px-7 pb-0 pt-8 shadow">
					<p>
						Listen to one of my favourite tracks{' '}
						<span className="font-bold">{randomTrack && randomTrack.name}</span>{' '}
						by {artists} randomly selected from my playlist{' '}
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
						className="m-auto mb-4 mt-3 flex items-center gap-2 bg-pink-600 px-3 py-1 text-lg text-stone-100 shadow-md hover:bg-violet-400"
						onClick={handleChangeSongClick}
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
			<MusicAlert
				track_name={randomTrack && randomTrack.name}
				artists={artists}
			/>
		</>
	);
}
