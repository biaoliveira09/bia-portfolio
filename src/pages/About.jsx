import { useState, useEffect } from 'react';
import { getPages } from './../utilities/api';
import { getTechStack } from './../utilities/api';

export default function About() {
	const [pageData, setPageData] = useState([]);
	const [techStack, setTechStack] = useState([]);

	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPages(20).then(data => {
			setPageData(data.acf);
			console.log(data.acf);
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
		<main className="z-40 mx-11 my-8 flex flex-col items-center justify-center gap-3">
			{isLoaded && (
				<div className="md:w-8/12">
					<section className="about-intro justify-center sm:min-h-screen">
						<h1 className="font-eight text-3xl">{short_intro}</h1>
						<p className="m-1">{bio}</p>
					</section>
					<section className="about-skills">
						<h2 className="font-eight text-2xl">{about_heading}</h2>
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
