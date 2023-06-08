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
				<section className="projects-section z-30 flex h-fit flex-col items-center justify-center">
					<h2 className="z-30 mb-3 text-2xl font-bold">Projects</h2>
					<div className="projects-wrapper flex flex-col flex-wrap items-center justify-center gap-4 sm:mx-10 md:flex-row">
						{projects.map(project => {
							const {
								project_name,
								project_overview,
								project_screenshot,
								tech_stack,
							} = project.acf;
							return (
								<Project
									key={project.id}
									project_name={project_name}
									project_overview={project_overview}
									project_id={project.id}
									project_screenshot={project_screenshot}
									tech_stack={tech_stack}
								/>
							);
						})}
					</div>
				</section>
			)}
		</>
	);
}
