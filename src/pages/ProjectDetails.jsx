import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectData } from '../utilities/api';
import OtherProjectsCarousel from '../components/OtherProjectsCarousel';
import ProjectInfo from '../components/ProjectInfo';
import placeholder from './../../public/placeholder.png';

export default function ProjectDetails() {
	const { project_id } = useParams();
	const [projectData, setProjectData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getProjectData(project_id)
			.then(data => {
				setProjectData(data.acf);
				console.log(data.acf);
				setIsLoaded(true);
			})
			.catch(error => {
				console.error('Error fetching project details:', error);
				setIsLoaded(true);
			});
	}, [project_id]);

	const {
		project_name,
		project_overview,
		project_screenshot,
		tech_stack,
		github_repository_url,
		live_preview_url,
		process,
		highlights,
	} = projectData;

	return (
		isLoaded && (
			<main className="project-details m-20 flex flex-col items-center">
				<div className="project-container z-20 flex flex-col items-center gap-7 rounded-lg bg-translucent p-6 md:p-10 lg:w-8/12">
					<h1 className="text-lg font-bold sm:text-xl lg:text-2xl">
						{project_name}
					</h1>
					{project_screenshot ? (
						<img
							src={project_screenshot.url}
							alt={project_screenshot.alt}
							className="w-64 shadow-lg sm:w-96 md:w-9/12 lg:w-11/12 "
						/>
					) : (
						<img
							src={placeholder}
							alt="placeholder"
							className="w-64 shadow-lg sm:w-96 md:w-9/12 lg:w-11/12"
						/>
					)}
					<p>{project_overview}</p>
					<div className="project-links flex flex-wrap justify-center gap-2">
						<a
							href={`${github_repository_url}`}
							className="bg-pink-600 px-3 py-1 text-stone-50 shadow-md hover:bg-violet-400"
						>
							GitHub Repository
						</a>
						<a
							href={`${live_preview_url}}`}
							className="bg-pink-600 px-3 py-1 text-stone-50 shadow-md  hover:bg-violet-400"
						>
							Live Site
						</a>
					</div>
					<div className="tech-used flex justify-center">
						<ul className="flex flex-wrap gap-2">
							{tech_stack &&
								tech_stack.map(tech => (
									<li key={tech} className="bg-amber-100 px-2 py-1 uppercase">
										{tech}
									</li>
								))}
						</ul>
					</div>
					<ProjectInfo projectData={projectData} />
					<section className="other-projects z-30 flex items-center">
						<h2 className="text-md font-bold sm:text-lg lg:text-xl">
							See Other Projects
						</h2>

						<OtherProjectsCarousel />
					</section>
				</div>
			</main>
		)
	);
}
