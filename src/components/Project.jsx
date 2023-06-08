import { Link } from 'react-router-dom';
import placeholder from './../../public/placeholder.png';

export default function Project({
	project_name,
	project_id,
	project_screenshot,
}) {
	return (
		<>
			<article className="single-project z-30 flex h-56 w-72 flex-col items-center justify-center rounded-xl border-stone-100 bg-lesstranslucent shadow">
				<Link to={`/projects/${project_id}`}>
					{project_screenshot ? (
						<img
							src={project_screenshot.url}
							alt={project_screenshot.alt}
							className="mx-auto w-64 rounded shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:w-96 md:w-9/12 lg:w-11/12" // Added "mx-auto" class to center the image horizontally
						/>
					) : (
						<img
							src={placeholder}
							alt="placeholder"
							className="mx-auto w-64 rounded shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:w-96 md:w-9/12 lg:w-11/12" // Added "mx-auto" class to center the image horizontally
						/>
					)}
				</Link>
				<div className="project-info flex w-64 justify-between ">
					<h2 className="font-medium">{project_name}</h2>
					{/* <p>{project_overview}</p> */}
					<Link to={`/projects/${project_id}`} className="hover:text-amber-600">
						Details
					</Link>
				</div>
			</article>
		</>
	);
}
