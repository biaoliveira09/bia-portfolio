import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { getPostsData } from './../utilities/api';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineDesignServices } from 'react-icons/md';

export default function TechStack({ skills_heading }) {
	const [techStack, setTechStack] = useState([]);
	const [displayTech, setDisplayTech] = useState([]);
	const [chosenCategory, setChosenCategory] = useState('all');
	const [animateTech, setAnimateTech] = useState(false);

	const DEV_CATEGORY = 5;
	const DESIGN_CATEGORY = 6;

	function handleCategoryClick(e) {
		const category = e.target.id;
		setChosenCategory(category);
		setAnimateTech(true);
		setTimeout(() => setAnimateTech(false), 800);
	}

	const {
		isSuccess,
		isError,
		data: techStackData,
		error,
	} = useQuery({
		queryKey: ['techStack'],
		queryFn: () => getPostsData('tech'),
	});

	useEffect(() => {
		if (isSuccess) {
			setTechStack(techStackData);
		}
	}, [techStackData, isSuccess]);

	useEffect(() => {
		setDisplayTech(techStack);
	}, [techStack]);

	function sortTechStack() {
		return chosenCategory === 'all'
			? techStack
			: techStack.filter(tech =>
					tech.tech_category.includes(
						chosenCategory === DEV_CATEGORY.toString()
							? DEV_CATEGORY
							: DESIGN_CATEGORY
					)
			  );
	}

	useEffect(() => {
		setDisplayTech(sortTechStack());
	}, [chosenCategory]);

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (isSuccess) {
		return (
			<section className="techstack-section mb-8 mt-10 lg:mb-12 lg:h-48">
				<div className="controls-container flex flex-col items-center justify-between md:flex-row">
					<h2 className="mb-4 text-2xl font-bold">{skills_heading}</h2>
					<div className="category-buttons mb-4 flex items-baseline justify-between gap-1 sm:gap-2">
						<button
							id="all"
							className={`flex items-center gap-1 border border-pink-700  px-2 py-1 uppercase ${
								chosenCategory === 'all'
									? 'bg-pink-700 text-stone-50 shadow'
									: 'shadow-md transition-colors hover:bg-pink-700 hover:text-stone-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-800'
							}`}
							onClick={handleCategoryClick}
						>
							All
						</button>
						<button
							id={DEV_CATEGORY}
							className={`flex items-center gap-1 border border-pink-700 px-2 py-1 uppercase ${
								chosenCategory === DEV_CATEGORY.toString()
									? 'bg-pink-700 text-stone-50'
									: 'shadow-md transition-colors hover:bg-pink-700 hover:text-stone-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-800'
							}`}
							onClick={handleCategoryClick}
						>
							Development
							<BiCodeAlt className="h-5 w-5" />
						</button>
						<button
							id={DESIGN_CATEGORY}
							className={`flex items-center gap-1 border border-pink-700 px-2 py-1 uppercase ${
								chosenCategory === DESIGN_CATEGORY.toString()
									? 'bg-pink-700 text-stone-50 shadow'
									: 'shadow-md transition-colors hover:bg-pink-700 hover:text-stone-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-800'
							}`}
							onClick={handleCategoryClick}
						>
							Design
							<MdOutlineDesignServices className="h-5 w-5" />
						</button>
					</div>
				</div>
				<div className="skills-container rounded-xl bg-stone-50/30 p-4 shadow">
					<ul className="flex flex-wrap gap-2">
						{displayTech.map(tech => (
							<li
								className={`bg-orange-100 ${
									animateTech ? 'animate-fade-in-up' : ''
								} rounded-md px-1.5 py-1 uppercase`}
								key={tech.id}
							>
								{tech.title.rendered}
							</li>
						))}
					</ul>
				</div>
			</section>
		);
	}
}
