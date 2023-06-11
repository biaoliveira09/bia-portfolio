import { useQuery } from '@tanstack/react-query';
import { getPostsData } from '../utilities/api';
import { FaAsterisk } from 'react-icons/fa';
import Music from './Music';
import TechStack from './TechStack';
import Reveal from '../utilities/Reveal';
import Contact from './Contact';

import { useAbout } from './../App';

export default function About() {
	const aboutQuery = useAbout();
	const interestsQuery = useQuery({
		queryKey: ['interests'],
		queryFn: () => getPostsData('interests'),
	});

	const isLoading = aboutQuery.isLoading || interestsQuery.isLoading;
	const isError = aboutQuery.isError || interestsQuery.isError;
	const isSuccess = aboutQuery.isSuccess && interestsQuery.isSuccess;
	const interestsError = interestsQuery.error;
	const aboutError = aboutQuery.error;

	if (isLoading) {
		return <div>Loading...</div>;
	}

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
			more_about_me_heading,
			more_about_me,
			interests_heading,
			playlist_id,
		} = aboutQuery.data.acf;

		return (
			<section
				id="about"
				className="mx-11 mt-24 flex flex-col items-center justify-center gap-3 xl:w-9/12 "
			>
				<div className="about-content z-30 h-screen justify-center sm:w-10/12 md:w-8/12 lg:w-7/12">
					<div className="about-intro flex flex-col justify-center sm:min-w-full">
						<Reveal>
							<h1 className="mb-1 text-3xl font-bold">{short_intro}</h1>
							<h2 className="text-md font-medium uppercase">{about_heading}</h2>
							<p className="my-4">{bio}</p>
						</Reveal>
						<Reveal>
							<TechStack skills_heading={skills_heading} />
						</Reveal>
					</div>
					<div className="more-about-me-section my-20 flex flex-col gap-9 sm:min-w-full sm:gap-12">
						<Reveal>
							<h2 className="mb-1 text-2xl font-bold">
								{more_about_me_heading}
							</h2>
							<p>{more_about_me}</p>
						</Reveal>
						<Reveal>
							<h2 className="mb-1 text-2xl font-bold">{interests_heading}</h2>
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
													data-tip="Pandemic hobby. The kind you neglect once things go back to normal."
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
						<Contact />
					</div>
					<Music playlistId={playlist_id} />
				</div>
			</section>
		);
	}
}
