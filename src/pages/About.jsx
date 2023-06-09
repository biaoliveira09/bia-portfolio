import { useState, useEffect } from 'react';
import { getPages, getInterests } from './../utilities/api';
import Music from './../components/Music';
import TechStack from './../components/TechStack';
import { FaAsterisk } from 'react-icons/fa';

export default function About() {
	const [pageData, setPageData] = useState([]);
	const [interests, setInterests] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPages(20).then(data => {
			setPageData(data.acf);
			setIsLoaded(true);
		});
	}, []);

	useEffect(() => {
		getInterests(20).then(data => {
			setInterests(data);
			setIsLoaded(true);
		});
	}, []);

	const { about_heading, short_intro, bio, skills_heading } = pageData;

	return (
		<main className="mx-11 flex flex-col items-center justify-center gap-3">
			{isLoaded && (
				<section className="about-content z-30 h-screen md:w-8/12 lg:w-7/12">
					<div className="about-intro flex flex-col justify-center sm:h-screen">
						<h1 className="text-3xl font-bold">{short_intro}</h1>
						<h2 className="text-md font-medium uppercase">{about_heading}</h2>
						<p className="m-1">{bio}</p>
						<div className="about-skills flex flex-col sm:h-5/6">
							<h2 className="mb-4 text-3xl font-bold">{skills_heading}</h2>
							<TechStack />
						</div>
						<h2 className="mb-4 text-2xl font-bold">I like:</h2>
						<ul className="flex flex-wrap gap-2">
							{interests.map(interest => {
								if (interest.interest_category.includes(8)) {
									return (
										<li key={interest.id} className="flex items-center gap-1">
											{interest.title.rendered}
											<button
												className="tooltip-primary tooltip tooltip-bottom"
												data-tip="Pandemic hobby. The kind you neglect once things go back to normal."
											>
												<FaAsterisk className=" text-purple-600" />
											</button>
										</li>
									);
								} else {
									return (
										<li key={interest.id} className="flex items-center gap-1">
											{interest.title.rendered}
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
