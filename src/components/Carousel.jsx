import { useEffect, useRef } from 'react';
import placeholder from './../assets/placeholder.png';
import { useProjects } from './Projects';
import { HashLink } from 'react-router-hash-link';

export default function Carousel({ currentProject }) {
	const carouselRef = useRef(null);
	const { isSuccess, isError, error, data: projects } = useProjects();

	useEffect(() => {
		const handleScroll = e => {
			let scrollAmount = e.wheelDelta > 0 ? -100 : 100;
			if (carouselRef.current) {
				carouselRef.current.scrollLeft += scrollAmount;
			}
		};

		if (carouselRef.current) {
			carouselRef.current.addEventListener('wheel', handleScroll);
		}

		return () => {
			if (carouselRef.current) {
				carouselRef.current.removeEventListener('wheel', handleScroll);
			}
		};
	}, []);

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	if (isSuccess) {
		return (
			<div
				ref={carouselRef}
				className="carousel-center carousel rounded-box space-x-4 bg-stone-50/90 p-4"
				style={{
					display: 'flex',
					overflowX: 'auto',
					whiteSpace: 'nowrap',
				}}
			>
				{projects
					.filter(project => project.slug !== currentProject)
					.map(project => {
						const { project_name, project_screenshot } = project.acf;
						return (
							<div key={project.id} className="carousel-item">
								<HashLink smooth to={`/projects/${project.slug}/#`}>
									{project_screenshot ? (
										<img
											src={project_screenshot.url}
											alt={project_screenshot.alt}
											className="rounded-box mx-auto h-40 w-64 bg-violet-100 shadow-lg hover:bg-orange-100"
										/>
									) : (
										<img
											src={placeholder}
											alt="placeholder"
											className="rounded-box mx-auto h-40 w-64 shadow-lg"
										/>
									)}
									<h2 className="m-auto pt-2 text-center font-medium">
										{project_name}
									</h2>
								</HashLink>
							</div>
						);
					})}
			</div>
		);
	}

	return null;
}
