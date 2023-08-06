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
			skills_heading,
			about_me,
			interests_heading,
		} = aboutQuery.data.acf;

		return (
			<section
				id="about"
				className="about z-30 mx-5 my-1 pt-8 sm:mx-auto sm:my-20 sm:pt-20 lg:pt-8"
			>
				<div className="about-intro flex flex-col justify-center sm:min-w-full lg:my-20">
					<Reveal>
						<h2 className="mx-2 mb-1 text-3xl font-bold">{short_intro}</h2>
						<h3 className="text-md mx-2 font-medium uppercase">
							{about_heading}
						</h3>
						<div
							dangerouslySetInnerHTML={{ __html: about_me }}
							className="about-paragraphs mx-3 my-4"
						></div>
					</Reveal>
					<Reveal>
						<TechStack skills_heading={skills_heading} />
					</Reveal>
					<Reveal>
						<h3 className="mb-4 text-2xl font-bold">{interests_heading}</h3>
						<ul className="flex flex-wrap gap-1 sm:gap-2">
							{interestsData.map(interest => {
								if (interest.interest_category.includes(8)) {
									return (
										<li
											key={interest.id}
											className="flex items-center gap-2 rounded-full border border-pink-700 px-2 py-1 sm:px-3"
										>
											{interest.title.rendered}
											<button
												className="tooltip-primary tooltip tooltip-bottom"
												data-tip="Pandemic hobby."
												aria-label="Pandemic hobby disclaimer."
											>
												<FaAsterisk className="text-purple-600" />
											</button>
										</li>
									);
								} else {
									return (
										<li
											key={interest.id}
											className="flex items-center rounded-full border border-pink-700 px-2 py-1"
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
