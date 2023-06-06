import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectData } from '../utilities/api';

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
		tech_stack,
		github_repository_url,
		live_preview_url,
	} = projectData;

	return (
		isLoaded && (
			<main className="project-details m-20 flex flex-col">
				<div className="project-info z-40">
					<h1>{project_name}</h1>
					<p>{project_overview}</p>
					<div className="flex flex-wrap gap-2">
						<a
							href={`${github_repository_url}`}
							className="bg-pink-600 px-3 py-1 text-stone-50 shadow-md"
						>
							Github Repository
						</a>
						<a
							href={`${live_preview_url}}`}
							className="bg-pink-600 px-3 py-1 text-stone-50 shadow-md"
						>
							Live Site
						</a>
					</div>
				</div>
			</main>
		)
	);
}
