import { useQuery } from '@tanstack/react-query';
import Project from './Project';
import { getProjects } from '../utilities/api';

export default function Projects() {
	const projectsQuery = useQuery({
		queryKey: ['projects'],
		queryFn: getProjects,
	});

	if (projectsQuery.isLoading) return <p>Loading...</p>;
	if (projectsQuery.isError) return <p>Error!!!</p>;

	return (
		<>
			<section
				id="projects"
				className="projects-section z-30 mb-24 flex h-fit flex-col items-center justify-center sm:min-h-screen"
			>
				<h2 className="z-30 mb-3 text-2xl font-bold">Projects</h2>
				<div className="projects-wrapper flex flex-col flex-wrap items-center justify-center gap-4 sm:mx-10 md:flex-row">
					{projectsQuery.data.map(project => {
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
		</>
	);
}
