import { useState, useEffect } from 'react';
import { getTechStack } from './../utilities/api';

export default function TechStack() {
	const [techStack, setTechStack] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	const [chosenCategory, setChosenCategory] = useState('all');

	function handleCategoryClick(e) {
		const category = e.target.id;
		setChosenCategory(category);
		console.log(category);
	}

	const DEV_CATEGORY = 5;
	const DESIGN_CATEGORY = 6;

	useEffect(() => {
		getTechStack().then(data => {
			setTechStack(data);
			setIsLoaded(true);
		});
	}, []);

	function sortTechStack() {
		console.log(chosenCategory);
		if (chosenCategory === 'all') {
			return techStack;
		} else if (chosenCategory === DEV_CATEGORY) {
			const devTech = techStack.filter(tech =>
				tech.tech_category.includes(DEV_CATEGORY)
			);
			return devTech;
		} else if (chosenCategory === DESIGN_CATEGORY) {
			const desTech = techStack.filter(tech =>
				tech.tech_category.includes(DESIGN_CATEGORY)
			);
			return desTech;
		}
	}

	return (
		<>
			<div className="category-buttons mb-4 flex flex-wrap gap-2">
				<button
					id="all"
					className="border border-pink-700 px-3 py-1 text-pink-700"
					onClick={handleCategoryClick}
				>
					All
				</button>
				<button
					id={DEV_CATEGORY}
					className="border border-pink-700 px-3 py-1 text-pink-700"
					onClick={handleCategoryClick}
				>
					Development
				</button>
				<button
					id={DESIGN_CATEGORY}
					className="border border-pink-700 px-3 py-1 text-pink-700"
					onClick={handleCategoryClick}
				>
					Design
				</button>
				<button
					id="other"
					className="border border-pink-700 px-3 py-1 text-pink-700"
					onClick={handleCategoryClick}
				>
					Other
				</button>
			</div>
			<div className="skills-container bg-translucentyellow p-4">
				<ul className="flex flex-wrap gap-2">
					{techStack.map(tech => {
						if (tech.tech_category.includes(DESIGN_CATEGORY)) {
							return (
								<li className="bg-lime-100 px-2 py-1 uppercase" key={tech.id}>
									{tech.title.rendered}
								</li>
							);
						} else if (tech.tech_category.includes(DEV_CATEGORY)) {
							return (
								<li className="bg-pink-100 px-2 py-1 uppercase" key={tech.id}>
									{tech.title.rendered}
								</li>
							);
						}
					})}
				</ul>
			</div>
		</>
	);
}
