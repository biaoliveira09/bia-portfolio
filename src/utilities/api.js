import axios from 'axios';
import { useNavigationType } from 'react-router-dom';

const API_URL = 'http://localhost:8888/bia-portfolio/wp-json/wp/v2/';

export const getPages = async id => {
	try {
		const response = await fetch(`${API_URL}pages/${id}`);
		const pages = await response.json();
		return pages;
	} catch (error) {
		throw new Error('Failed to retrieve pages');
	}
};

export const getProjects = async () => {
	try {
		const response = await fetch(`${API_URL}projects`);
		const projects = await response.json();
		return projects;
	} catch (error) {
		throw new Error('Failed to retrieve projects');
	}
};

export const getTechStack = async () => {
	try {
		const response = await fetch(`${API_URL}tech?per_page=50`);
		const tech = await response.json();
		return tech;
	} catch (error) {
		throw new Error('Failed to retrieve techstack');
	}
};

///////////////////// to get token!!!!!!!! ///////////////////////

const client_id = '148656cb4c004c73bdf0e36d29b52292';
const client_secret = '56785c0f07074adc952f665a4f91b093';
// const playlistId = '4iHa1Vqfvh4kLrp8JjbDeO'; // Replace 'your-artist-id' with the ID of the artist you want to retrieve data for

export function getPlaylist(playlistId) {
	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			Authorization: 'Basic ' + btoa(`${client_id}:${client_secret}`),
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: 'grant_type=client_credentials',
	};

	axios
		.post(authOptions.url, authOptions.data, { headers: authOptions.headers })
		.then(response => {
			if (response.status === 200) {
				const token = response.data.access_token;
				// console.log('Access Token:', token);

				const options = {
					url: `https://api.spotify.com/v1/playlists/${playlistId}`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};

				axios
					.get(options.url, { headers: options.headers })
					.then(response => {
						if (response.status === 200) {
							const playlistData = response.data;
							console.log('Tracks', playlistData.tracks.items);
						} else {
							console.error('Error:', response.status, response.data);
						}
					})
					.catch(error => {
						console.error('Error:', error);
					});
			} else {
				console.error('Error:', response.status, response.data);
			}
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

/////////////////// specifically for playlist ///////////////////////
// const token =
// 	'BQARo859qI51T0UYjs2NxZCqrsXto6jRYJPzHsimoCSsovopMQ_PPuivpQ8VyDoDSFlUBF5IMp9jdO9aLNK6UiX_pjI06CEnNJTYDR80LlKC-EpgoTk'; // Replace 'your-access-token' with the actual access token

// const options = {
// 	url: `https://api.spotify.com/v1/playlists/${playlistId}`,
// 	headers: {
// 		Authorization: `Bearer ${token}`,
// 	},
// };

// export function getPlaylist() {
// 	axios
// 		.get(options.url, { headers: options.headers })
// 		.then(response => {
// 			if (response.status === 200) {
// 				const playlistData = response.data;
// 				console.log('Playlist Data:', playlistData);
// 				console.log('Tracks', playlistData.tracks.items);
// 			}
// 		})
// 		.catch(error => {
// 			console.error('Error:', error.response.status, error.response.data);
// 		});
// }
