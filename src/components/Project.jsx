import { Link } from 'react-router-dom';
import placeholder from './../assets/placeholder.png';

export default function Project({
	project_name,
	project_id,
	project_screenshot,
	tech_stack,
}) {
	return (
		<>
			<article className="single-project z-30 flex h-96 w-96 flex-col items-center justify-center rounded-xl border-stone-100 bg-stone-50/30 shadow">
				<Link to={`/projects/${project_id}`}>
					{project_screenshot ? (
						<img
							src={project_screenshot.url}
							alt={project_screenshot.alt}
							className="mx-auto h-48 w-80 rounded shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
						/>
					) : (
						<img
							src={placeholder}
							alt="placeholder"
							className="mx-auto h-48 w-80 rounded shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
						/>
					)}
				</Link>
				<div className="project-info my-2 flex h-24 w-72 flex-col items-center gap-2">
					<h2 className="text-lg font-medium">{project_name}</h2>
					<ul className="flex flex-wrap justify-center gap-1">
						{tech_stack.map(tech => {
							return (
								<li
									key={tech}
									className=" bg-violet-100 px-0.5 py-0.5 text-sm uppercase"
								>
									{tech}
								</li>
							);
						})}
					</ul>
					<Link
						to={`/projects/${project_id}`}
						className="mt-3 w-64 rounded-lg px-2 py-1 text-center text-sm font-medium transition-colors hover:bg-pink-100/30"
					>
						Details
					</Link>
				</div>
			</article>
		</>
	);
}
