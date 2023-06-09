import { useState, useEffect } from 'react';
import { getPages, getInterests } from '../utilities/api';
import Music from './Music';
import TechStack from './TechStack';
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
		<section
			id="about"
			className="mx-11 flex h-screen flex-col items-center justify-center gap-3"
		>
			{isLoaded && (
				<div className="about-content z-30 h-screen justify-center md:w-8/12 lg:w-7/12">
					<h1 className="text-3xl font-bold">{short_intro}</h1>
					<h2 className="text-md font-medium uppercase">{about_heading}</h2>
					<p className="m-1">{bio}</p>
					<TechStack skills_heading={skills_heading} />
					<div className="interests-section my-2 flex flex-col">
						<h2 className="mb-1 text-2xl font-bold">I like:</h2>
						<ul className="flex flex-wrap gap-3">
							{interests.map(interest => {
								if (interest.interest_category.includes(8)) {
									return (
										<li key={interest.id} className="flex items-center gap-1">
											{interest.title.rendered}
											<button
												className="tooltip-primary tooltip tooltip-bottom"
												data-tip="Pandemic hobby. The kind you neglect once things go back to normal."
											>
												<FaAsterisk className="text-purple-600" />
											</button>
										</li>
									);
								} else {
									return (
										<li key={interest.id} className="flex items-center gap-1">
											{interest.title.rendered},
										</li>
									);
								}
							})}
						</ul>
					</div>
					<Music />
				</div>
			)}
		</section>
	);
}
