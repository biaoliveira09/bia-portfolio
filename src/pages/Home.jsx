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
		short_intro,
		short_bio,
		github_profile_link,
		linkedin_profile_link,
		email_address,
	} = pageData;

	return (
		<>
			{isLoaded && (
				<main className="relative flex min-h-screen flex-col items-center overflow-x-hidden font-outfit">
					<section className="intro-section z-30 flex h-56 flex-col items-center justify-center">
						<h1 className="text-4xl font-bold">{short_intro}</h1>
						<p className="text-xl">{short_bio}</p>
						<div className="social-icons m-2 flex gap-6">
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
					<div className="animation-delay-2000 absolute -left-40 top-12 z-20 h-64 w-64 animate-blob rounded-full bg-lime-200 opacity-70 blur-lg filter "></div>
					<div className="animation-delay-4000 absolute top-40 z-20 h-72 w-72 animate-blob rounded-full bg-yellow-400 opacity-30 mix-blend-multiply blur-xl filter"></div>
					<div className="absolute -left-0 bottom-24 z-20 h-44 w-44 animate-blob rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-20 blur-lg filter "></div>
					<div className="-bottom-18 absolute -right-40 z-20 h-56 w-56 animate-blob rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 blur-lg filter "></div>
					<Projects />
				</main>
			)}
		</>
	);
}
