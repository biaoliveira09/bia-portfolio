import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import placeholder from './../assets/placeholder.png';
import { useProjects } from './Projects';

export default function Carousel() {
	const { data: projects } = useProjects();
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
	};

	const handleNextClick = () => {
		setCurrentIndex(prevIndex => Math.min(prevIndex + 1, projects.length - 2));
	};

	if (projects && projects.length > 0) {
		return (
			<div
				id="controls-carousel"
				className="relative w-full"
				data-carousel="static"
			>
				<div
					className="flex space-x-4 overflow-x-hidden duration-700 ease-in-out"
					data-carousel-item
				>
					{projects.slice(currentIndex, currentIndex + 2).map(project => {
						const { project_name, project_screenshot } = project.acf;
						return (
							<div className="carousel-item" key={project.id}>
								<Link to={`/projects/${project.id}`}>
									{project_screenshot ? (
										<img
											src={project_screenshot.url}
											alt={project_screenshot.alt}
											className="rounded-box mx-auto h-40 w-64 shadow-lg"
										/>
									) : (
										<img
											src={placeholder}
											alt="placeholder"
											className="rounded-box mx-auto h-40 w-64 shadow-lg"
										/>
									)}
									<h2 className="m-auto font-medium">{project_name}</h2>
								</Link>
							</div>
						);
					})}
				</div>
				{currentIndex > 0 && (
					<button
						type="button"
						className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
						data-carousel-prev
						onClick={handlePrevClick}
					>
						<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
							<svg
								aria-hidden="true"
								className="h-6 w-6 text-white dark:text-gray-800"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 19l-7-7 7-7"
								></path>
							</svg>
							<span className="sr-only">Previous</span>
						</span>
					</button>
				)}
				{currentIndex < projects.length - 2 && (
					<button
						type="button"
						className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
						data-carousel-next
						onClick={handleNextClick}
					>
						<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
							<svg
								aria-hidden="true"
								className="h-6 w-6 text-white dark:text-gray-800"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 5l7 7-7 7"
								></path>
							</svg>
							<span className="sr-only">Next</span>
						</span>
					</button>
				)}
			</div>
		);
	}

	return null;
}
