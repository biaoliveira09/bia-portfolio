import { useState, useEffect } from 'react';
import { getPages, getTechStack } from './../utilities/api';
import Music from './../components/Music';

export default function About() {
	const [pageData, setPageData] = useState([]);
	const [techStack, setTechStack] = useState([]);

	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPages(20).then(data => {
			setPageData(data.acf);
			// console.log(data.acf);
			setIsLoaded(true);
		});
	}, []);

	useEffect(() => {
		getTechStack().then(data => {
			setTechStack(data);
			// console.log(data);
			setIsLoaded(true);
		});
	}, []);

	const { about_heading, short_intro, bio } = pageData;

	return (
		<main className="mx-11 my-8 flex flex-col items-center justify-center gap-3">
			{isLoaded && (
				<div className="about-content z-30 md:w-8/12">
					<section className="about-intro justify-center">
						<h1 className="text-3xl font-bold">{short_intro}</h1>
						<p className="m-1">{bio}</p>
					</section>
					<Music />

					<section className="about-skills">
						<h2 className="text-2xl font-bold">{about_heading}</h2>
						<ul className="flex flex-wrap gap-2">
							{techStack.map(tech => {
								return (
									<li
										className="bg-lime-100 px-2 py-1 text-purple-900"
										key={tech.id}
									>
										{tech.title.rendered}
									</li>
								);
							})}
						</ul>
					</section>
				</div>
			)}
		</main>
	);
}
