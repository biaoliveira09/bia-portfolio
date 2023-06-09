import { useState, useEffect } from 'react';
import { getPages } from './../utilities/api';
import Projects from './Projects';
import About from '../components/About';

export default function Home() {
	const [pageData, setPageData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPages(20).then(data => {
			setPageData(data.acf);
			setIsLoaded(true);
		});
	}, []);

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
				<main className="flex flex-col overflow-x-hidden">
					<section className="intro-section z-30 flex h-72 flex-col items-center justify-center sm:h-64 lg:h-screen">
						<h1 className="fade-in z-30 font-eight text-4xl lowercase sm:text-6xl md:text-7xl">
							{name}
						</h1>
						<p className=" fade-in z-30 text-lg sm:text-xl md:text-2xl">
							{short_bio}
						</p>
						<div className="social-links z-30 m-2 flex gap-6 sm:hidden">
							<a href={github_profile_link} target="_blank" rel="noreferrer">
								GitHub
							</a>
							<a href={linkedin_profile_link} target="_blank" rel="noreferrer">
								LinkedIn
							</a>
							<a
								href={`mailto:${email_address}`}
								target="_blank"
								rel="noreferrer"
							>
								Email
							</a>
						</div>
					</section>
					<Projects />
					<About />
				</main>
			)}
		</>
	);
}
