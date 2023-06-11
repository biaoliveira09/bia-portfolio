import { useQuery } from '@tanstack/react-query';
import Project from './Project';
import { getProjects } from '../utilities/api';
import Reveal from '../utilities/Reveal';

export const useProjects = () => {
	const query = useQuery(['projects'], getProjects, {
		staleTime: 5 * 60 * 1000,
	});
	return {
		isLoading: query.isLoading,
		isError: query.isError,
		isSuccess: query.isSuccess,
		data: query.data,
		error: query.error,
	};
};

export default function Projects() {
	const {
		isLoading,
		isError,
		isSuccess,
		data: projects,
		error,
	} = useProjects();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (isSuccess) {
		return (
			<>
				<section
					id="projects"
					className="projects-section z-30 flex h-fit flex-col items-center justify-center sm:min-h-screen"
				>
					<Reveal>
						<h2 className="z-30 mb-3 text-2xl font-bold">Projects</h2>
					</Reveal>
					<div className="projects-wrapper flex flex-col flex-wrap items-center justify-center gap-4 sm:mx-10 md:flex-row">
						{projects.map(project => {
							const {
								project_name,
								project_overview,
								project_screenshot,
								tech_stack,
							} = project.acf;
							return (
								<Reveal key={project.id}>
									<Project
										key={project.id}
										project_name={project_name}
										project_overview={project_overview}
										project_id={project.id}
										project_screenshot={project_screenshot}
										tech_stack={tech_stack}
									/>
								</Reveal>
							);
						})}
					</div>
				</section>
			</>
		);
	}
}
