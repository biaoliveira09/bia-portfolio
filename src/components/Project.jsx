import placeholder from '../assets/flixr-placeholder.png';
import { Link } from 'react-router-dom';

export default function Project({ project_name, project_id }) {
	return (
		<>
			<article className="single-project z-30 flex h-56 w-72 flex-col items-center justify-center rounded-xl border-stone-100 bg-lesstranslucent shadow">
				<img
					src={placeholder}
					alt="placeholder"
					className="w-64 rounded shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
				/>
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
