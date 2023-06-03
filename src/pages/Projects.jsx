import { useState, useEffect } from 'react';
import Project from '../components/Project';
import { getProjects } from '../utilities/api';

export default function Projects() {
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
		<>
			{isLoaded && (
				<main className="projects-section flex flex-col items-center gap-4">
					{projects.map(project => {
						const { project_name, project_overview } = project.acf;
						return (
							<Project
								key={project.id}
								project_name={project_name}
								project_overview={project_overview}
							/>
						);
					})}
				</main>
			)}
		</>
	);
}
