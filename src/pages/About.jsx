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
			console.log(data);
			setIsLoaded(true);
		});
	}, []);

	const { about_heading, short_intro, bio } = pageData;

	return (
		<main className="mx-11 flex flex-col items-center justify-center gap-3">
			{isLoaded && (
				<section className="about-content z-30 h-screen md:w-8/12">
					<div className="about-intro flex flex-col justify-center">
						<h1 className="text-3xl font-bold">{short_intro}</h1>
						<p className="m-1">{bio}</p>
					</div>
					<div className="about-skills">
						<h2 className="text-2xl font-bold">{about_heading}</h2>
						<ul className="flex flex-wrap gap-2">
							{techStack.map(tech => {
								console.log(tech.tech_category);
								if (tech.tech_category.includes(6)) {
									return (
										<li
											className="bg-lime-100 px-2 py-1 uppercase"
											key={tech.id}
										>
											{tech.title.rendered}
										</li>
									);
								} else if (tech.tech_category.includes(5)) {
									return (
										<li
											className="bg-pink-100 px-2 py-1 uppercase"
											key={tech.id}
										>
											{tech.title.rendered}
										</li>
									);
								}
							})}
						</ul>
					</div>
					<Music />
				</section>
			)}
		</main>
	);
}
