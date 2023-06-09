import { useQuery } from '@tanstack/react-query';
import { getPages, getPostsData } from '../utilities/api';
import { FaAsterisk } from 'react-icons/fa';
import Music from './Music';
import TechStack from './TechStack';

const ABOUT_PAGE_ID = 20;

export default function About() {
	const pagesQuery = useQuery({
		queryKey: ['pages', ABOUT_PAGE_ID],
		queryFn: () => getPages(ABOUT_PAGE_ID),
	});

	const interestsQuery = useQuery({
		queryKey: ['interests'],
		queryFn: () => getPostsData('interests'),
	});

	if (interestsQuery.isLoading) return <p>Loading...</p>;
	if (interestsQuery.isError) return <p>Error!!!</p>;

	if (pagesQuery.isLoading) return <p>Loading...</p>;
	if (pagesQuery.isError) return <p>Error!!!</p>;

	const { about_heading, short_intro, bio, skills_heading } =
		pagesQuery.data.acf;

	return (
		<section
			id="about"
			className="mx-11 flex h-screen flex-col items-center justify-center gap-3"
		>
			<div className="about-content z-30 h-screen justify-center md:w-8/12 lg:w-7/12">
				<h1 className="mb-1 text-3xl font-bold">{short_intro}</h1>
				<h2 className="text-md font-medium uppercase">{about_heading}</h2>
				<p className="my-4">{bio}</p>
				<TechStack skills_heading={skills_heading} />
				<div className="interests-section my-2 flex flex-col">
					<h2 className="mb-1 text-2xl font-bold">I like:</h2>
					<ul className="flex flex-wrap gap-2">
						{interestsQuery.data.map(interest => {
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
				</div>
				<Music />
			</div>
		</section>
	);
}
