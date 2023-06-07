import { useState, useEffect } from 'react';
import { getPages, getTechStack } from './../utilities/api';
import Music from './../components/Music';
import TechStack from './../components/TechStack';

export default function About() {
	const [pageData, setPageData] = useState([]);
	// const [techStack, setTechStack] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	// const [chosenCategory, setChosenCategory] = useState('all');

	// function handleCategoryClick(e) {
	// 	const category = e.target.id;
	// 	setChosenCategory(category);
	// 	console.log(category);
	// }

	// const DEV_CATEGORY = 5;
	// const DESIGN_CATEGORY = 6;

	useEffect(() => {
		getPages(20).then(data => {
			setPageData(data.acf);
			setIsLoaded(true);
		});
	}, []);

	// useEffect(() => {
	// 	getTechStack().then(data => {
	// 		setTechStack(data);
	// 		setIsLoaded(true);
	// 	});
	// }, []);

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
						<h2 className="mb-4 text-2xl font-bold">{about_heading}</h2>
						<TechStack />
					</div>
					<Music />
				</section>
			)}
		</main>
	);
}
