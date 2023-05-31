import { useState, useEffect } from 'react';
import Project from './Project';
import { getProjects } from './../utilities/api';

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
			{isLoaded &&
				projects.map(project => {
					const { project_name, project_overview } = project.acf;
					return (
						<Project
							key={project.id}
							project_name={project_name}
							project_overview={project_overview}
						/>
					);
				})}
		</>
	);
}
