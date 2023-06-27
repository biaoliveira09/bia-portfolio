import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProjectData } from '../utilities/api';
import ProjectInfoAccordion from '../components/ProjectInfoAccordion';
import placeholder from './../assets/placeholder.png';
import Carousel from '../components/Carousel';
import Reveal from '../utilities/Reveal';

export default function ProjectDetails() {
	const { project_id } = useParams();

	const {
		isError,
		isSuccess,
		data: project,
		error,
	} = useQuery({
		queryKey: ['project', project_id],
		queryFn: () => getProjectData(project_id),
	});

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (isSuccess) {
		const {
			project_name,
			project_overview,
			project_screenshot,
			tech_stack,
			github_repository_url,
			live_preview_url,
			project_info,
		} = project.acf;

		return (
			<>
				<main className="project-details m-7 mb-12 flex flex-col items-center sm:m-20">
					<div className="project-container z-20 flex flex-col items-center gap-7 rounded-2xl bg-stone-50/30 p-6 md:p-10 lg:w-8/12">
						<Reveal>
							<h1 className="text-lg font-bold sm:text-xl lg:text-2xl">
								{project_name}
							</h1>
						</Reveal>

						<Reveal>
							{project_screenshot ? (
								<img
									src={project_screenshot.url}
									alt={project_screenshot.alt}
									className="w-64 rounded bg-violet-100 shadow-lg sm:w-96 md:w-9/12 lg:w-11/12"
								/>
							) : (
								<img
									src={placeholder}
									alt="placeholder"
									className="w-64 rounded shadow-lg sm:w-96 md:w-9/12 lg:w-11/12"
								/>
							)}
						</Reveal>
						<Reveal>
							<p className="max-w-prose">{project_overview}</p>
						</Reveal>
						<Reveal>
							<div className="project-links flex flex-wrap justify-center gap-2">
								<a
									href={github_repository_url}
									className="bg-pink-600 px-3 py-1 text-stone-50 shadow-md hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-lg"
								>
									GitHub Repository
								</a>
								<a
									href={live_preview_url}
									className="bg-pink-600 px-3 py-1 text-stone-50 shadow-md  hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-lg"
								>
									Live Site
								</a>
							</div>
						</Reveal>
						<Reveal>
							<div className="tech-used flex">
								<ul className="flex flex-wrap justify-center gap-2">
									{tech_stack &&
										tech_stack.map(tech => (
											<li
												key={tech}
												className="bg-orange-100 px-2 py-1 text-sm uppercase"
											>
												{tech}
											</li>
										))}
								</ul>
							</div>
						</Reveal>
						<Reveal>
							<ProjectInfoAccordion project_info={project_info} />
						</Reveal>
						<Reveal>
							<section className="other-projects z-30 flex flex-col items-center">
								<h2 className="text-md my-6 font-bold sm:text-lg lg:text-xl">
									View All Projects
								</h2>
								<Carousel />
							</section>
						</Reveal>
					</div>
				</main>
			</>
		);
	}
}
