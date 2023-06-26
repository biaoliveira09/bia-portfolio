import { useQuery } from '@tanstack/react-query';
import { getPostsData } from '../utilities/api';
import { FaAsterisk } from 'react-icons/fa';
import TechStack from './TechStack';
import Reveal from '../utilities/Reveal';

import { useAbout } from './../App';

export default function About() {
	const aboutQuery = useAbout();
	const interestsQuery = useQuery({
		queryKey: ['interests'],
		queryFn: () => getPostsData('interests'),
	});

	const isError = aboutQuery.isError || interestsQuery.isError;
	const isSuccess = aboutQuery.isSuccess && interestsQuery.isSuccess;
	const interestsError = interestsQuery.error;
	const aboutError = aboutQuery.error;

	if (isError) {
		return (
			<div>
				Error: {interestsError ? interestsError.message : aboutError.message}
			</div>
		);
	}

	if (isSuccess) {
		const interestsData = interestsQuery.data;
		const {
			about_heading,
			short_intro,
			bio,
			skills_heading,
			about_me,
			more_about_me,
			interests_heading,
		} = aboutQuery.data.acf;

		return (
			<section
				id="about"
				className="about z-30 mx-5 my-20 pt-20 sm:mx-auto lg:pt-8"
			>
				<div className="about-intro flex flex-col justify-center sm:min-w-full lg:my-40">
					<Reveal>
						<h1 className="mb-1 text-3xl font-bold">{short_intro}</h1>
						<h2 className="text-md font-medium uppercase">{about_heading}</h2>
						<p className="my-4">{bio}</p>
						<p className="my-4">{about_me}</p>
						<p className="my-4">{more_about_me}</p>
					</Reveal>
					<Reveal>
						<TechStack skills_heading={skills_heading} />
					</Reveal>
					<Reveal>
						<h2 className="mb-4  text-2xl font-bold">{interests_heading}</h2>
						<ul className="flex flex-wrap gap-2">
							{interestsData.map(interest => {
								if (interest.interest_category.includes(8)) {
									return (
										<li
											key={interest.id}
											className="flex items-center gap-2 rounded-full border border-pink-700 px-3 py-1"
										>
											{interest.title.rendered}
											<button
												className="tooltip-primary tooltip tooltip-bottom"
												data-tip="Pandemic hobby."
											>
												<FaAsterisk className="text-purple-600" />
											</button>
										</li>
									);
								} else {
									return (
										<li
											key={interest.id}
											className="flex items-center rounded-full border border-pink-700 px-3 py-1"
										>
											{interest.title.rendered}
										</li>
									);
								}
							})}
						</ul>
					</Reveal>
				</div>
			</section>
		);
	}
}
