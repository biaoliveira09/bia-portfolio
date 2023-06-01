import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { getPages } from './../utilities/api';
import { getPlaylist } from './../utilities/api';
import Projects from './Projects';

export default function Home() {
	const [pageData, setPageData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPages(20).then(data => {
			setPageData(data.acf);
			console.log(data.acf);
			setIsLoaded(true);
		});
	}, []);

	useEffect(() => getPlaylist('4iHa1Vqfvh4kLrp8JjbDeO'), []);

	const { short_intro, short_bio, github_profile_link, linkedin_profile_link } =
		pageData;

	return (
		<>
			{isLoaded && (
				<>
					<h1 className="font-cabin text-3xl font-bold text-pink-600">
						{short_intro}
					</h1>
					<p className=" text-pink-600">{short_bio}</p>
					<div className="social-icons m-2 flex gap-3">
						<a href={github_profile_link}>
							<FiGithub className="h-10 w-10 text-pink-600" />
						</a>
						<a href={linkedin_profile_link}>
							<FiLinkedin className="h-10 w-10 text-pink-600" />
						</a>
					</div>
					<Projects />
				</>
			)}
		</>
	);
}
