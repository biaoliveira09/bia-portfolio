import { useProjects } from '../components/Projects';
import Project from '../components/Project';
import Reveal from '../utilities/Reveal';

export default function ProjectPage() {
	const { data, isSuccess, isError, error } = useProjects();

	if (isError) {
		return <p>Error: {error.message}</p>;
	}
	if (isSuccess) {
		return (
			<Reveal>
				<main className="projects-page z-30 flex h-5/6 min-w-full flex-col items-center justify-center py-10 sm:py-28 lg:pt-40">
					<h2 className="z-30 mb-3 text-3xl font-bold sm:mb-6 md:mb-10">
						All Projects
					</h2>
					<div className="projects-wrapper z-30 flex flex-col flex-wrap items-center justify-center gap-6 sm:mx-10 sm:gap-4 md:flex-row">
						{data.map(project => {
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
				</main>
			</Reveal>
		);
	}
}
