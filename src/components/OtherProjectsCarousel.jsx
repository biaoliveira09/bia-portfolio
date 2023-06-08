import { getProjects } from '../utilities/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import placeholder from './../assets/placeholder.png';

export default function OtherProjectsCarousel() {
	const [projects, setProjects] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getProjects().then(data => {
			setProjects(data);
			console.log(data);
			setIsLoaded(true);
		});
	}, []);

	return (
		<div className="carousel-center carousel rounded-box z-30 max-w-xl space-x-4 bg-lesstranslucent p-4">
			{isLoaded &&
				projects.map(project => {
					const { project_name, project_screenshot } = project.acf;
					return (
						<div className="carousel-item" key={project}>
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
	);
}
