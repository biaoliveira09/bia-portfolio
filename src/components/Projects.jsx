import { useQuery } from '@tanstack/react-query';
import Project from './Project';
import { getProjects } from '../utilities/api';
import Reveal from '../utilities/Reveal';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
	const { isError, isSuccess, data: projects, error } = useProjects();

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (isSuccess && projects.length > 0) {
		const firstThreeItems = projects.slice(0, 3);
		return (
			<>
				<section
					id="projects"
					className="projects-section z-30 flex h-fit flex-col items-center justify-center py-28 sm:min-w-full lg:pt-40"
				>
					<Reveal>
						<h2 className="z-30 mb-3 text-3xl font-bold sm:mb-6 md:mb-10">
							Featured Projects
						</h2>
					</Reveal>
					<div className="projects-wrapper flex flex-col flex-wrap items-center justify-center gap-6 sm:mx-10 sm:gap-4 md:flex-row">
						{firstThreeItems.map(project => {
							const {
								project_name,
								project_overview,
								project_screenshot,
								tech_stack,
							} = project.acf;

							const project_slug = project.slug;

							return (
								<Reveal key={project.id}>
									<Project
										key={project.id}
										project_name={project_name}
										project_overview={project_overview}
										project_id={project.id}
										project_screenshot={project_screenshot}
										tech_stack={tech_stack}
										project_slug={project_slug}
									/>
								</Reveal>
							);
						})}
					</div>
					<Link
						to={`/projects`}
						className="mt-10 flex items-center gap-2 text-lg  hover:-translate-y-0.5"
					>
						See All Projects <BsArrowRightCircle />
					</Link>
				</section>
			</>
		);
	}
}
