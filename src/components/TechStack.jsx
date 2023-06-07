import { useState, useEffect } from 'react';
import { getTechStack } from './../utilities/api';

export default function TechStack() {
	const [techStack, setTechStack] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [displayTech, setDisplayTech] = useState(techStack);
	const [chosenCategory, setChosenCategory] = useState('all');

	const DEV_CATEGORY = 5;
	const DESIGN_CATEGORY = 6;

	function handleCategoryClick(e) {
		const category = e.target.id;
		setChosenCategory(category);
		console.log(category);
	}

	useEffect(() => {
		getTechStack().then(data => {
			setTechStack(data);
			setIsLoaded(true);
			setDisplayTech(data);
		});
	}, []);

	function sortTechStack() {
		if (chosenCategory === 'all') {
			return techStack;
		} else if (chosenCategory === DEV_CATEGORY.toString()) {
			const devTech = techStack.filter(tech =>
				tech.tech_category.includes(DEV_CATEGORY)
			);
			return devTech;
		} else if (chosenCategory === DESIGN_CATEGORY.toString()) {
			const desTech = techStack.filter(tech =>
				tech.tech_category.includes(DESIGN_CATEGORY)
			);
			return desTech;
		}
	}

	useEffect(() => {
		setDisplayTech(sortTechStack());
	}, [chosenCategory]);

	return (
		<>
			<div className="category-buttons mb-4 flex flex-wrap gap-2">
				<button
					id="all"
					className={`border border-pink-700  px-3 py-1 uppercase ${
						chosenCategory === 'all'
							? 'bg-pink-700 text-stone-50'
							: 'border-pink-700 bg-transparent text-pink-700'
					}`}
					onClick={handleCategoryClick}
				>
					All
				</button>
				<button
					id={DEV_CATEGORY}
					className={`border border-pink-700 px-3 py-1 uppercase ${
						chosenCategory === DEV_CATEGORY.toString()
							? 'bg-pink-700 text-stone-50'
							: 'border-pink-700 bg-transparent text-pink-700'
					}`}
					onClick={handleCategoryClick}
				>
					Development
				</button>
				<button
					id={DESIGN_CATEGORY}
					className={`border border-pink-700 px-3 py-1 uppercase ${
						chosenCategory === DESIGN_CATEGORY.toString()
							? 'bg-pink-700 text-stone-50'
							: 'border-pink-700 bg-transparent text-pink-700'
					}`}
					onClick={handleCategoryClick}
				>
					Design
				</button>
			</div>
			<div className="skills-container bg-translucentyellow p-4">
				<ul className="flex flex-wrap gap-2">
					{displayTech.map(tech => (
						<li
							className={`${
								tech.tech_category.includes(DESIGN_CATEGORY)
									? 'bg-lime-100'
									: 'bg-pink-100'
							} px-2 py-1 uppercase`}
							key={tech.id}
						>
							{tech.title.rendered}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
