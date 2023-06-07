import { useState, useEffect } from 'react';
import { getTechStack } from './../utilities/api';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineDesignServices } from 'react-icons/md';

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
		<section className="techstack-section">
			<div className="category-buttons mb-4 flex items-center justify-center gap-2">
				<button
					id="all"
					className={`border border-pink-700  px-2 py-1 uppercase ${
						chosenCategory === 'all'
							? 'bg-pink-700 text-stone-50 shadow'
							: 'border-pink-700 bg-translucentpink text-pink-700 shadow'
					}`}
					onClick={handleCategoryClick}
				>
					All
				</button>
				<button
					id={DEV_CATEGORY}
					className={`flex items-center gap-1 border border-pink-700 px-2 py-1 uppercase ${
						chosenCategory === DEV_CATEGORY.toString()
							? 'bg-pink-700 text-stone-50 shadow'
							: 'border-pink-700 bg-translucentpink text-pink-700 shadow'
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
							: 'border-pink-700 bg-translucentpink text-pink-700 shadow'
					}`}
					onClick={handleCategoryClick}
				>
					Design
					<MdOutlineDesignServices className="h-5 w-5" />
				</button>
			</div>
			<div className="skills-container rounded-lg bg-translucent p-4 shadow">
				<ul className="flex flex-wrap gap-2">
					{displayTech.map(tech => (
						<li
							className={`${
								tech.tech_category.includes(DESIGN_CATEGORY)
									? 'bg-amber-100'
									: 'bg-blue-100'
							} px-2 py-1 uppercase`}
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
