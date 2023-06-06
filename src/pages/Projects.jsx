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
				<main className="projects-section z-30 flex flex-col flex-wrap items-center gap-8">
					<h2 className="text-2xl font-bold">Projects</h2>
					<div className="projects-wrapper flex flex-wrap items-center justify-center gap-4 sm:mx-10 lg:flex-row">
						{projects.map(project => {
							const { project_name, project_overview } = project.acf;
							return (
								<Project
									key={project.id}
									project_name={project_name}
									project_overview={project_overview}
									project_id={project.id}
								/>
							);
						})}
					</div>
				</main>
			)}
		</>
	);
}
