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

	const {
		name,
		short_bio,
		github_profile_link,
		linkedin_profile_link,
		email_address,
	} = pageData;

	return (
		<>
			{isLoaded && (
				<main className="">
					<section className="intro-section font-cast z-30 flex h-64 flex-col items-center justify-center sm:min-h-screen">
						<h1 className="z-30 font-eight text-4xl lowercase  sm:text-7xl md:text-8xl">
							{name}
						</h1>
						<p className="z-30 text-lg sm:text-xl">{short_bio}</p>
						<div className="social-icons z-30 m-2 flex gap-6">
							<a href={github_profile_link}>
								{/* <FiGithub className="h-10 w-10 " /> */}
								Github
							</a>
							<a href={linkedin_profile_link}>
								{/* <FiLinkedin className="h-10 w-10 " /> */}
								LinkedIn
							</a>
							<a href={`mailto:${email_address}`}>Email</a>
						</div>
					</section>
					<section className="projects-section flex flex-col items-center sm:min-h-screen">
						<Projects />
					</section>
				</main>
			)}
		</>
	);
}
