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
			<article className="single-project z-30 flex h-80 w-80 flex-col items-center justify-center rounded-xl border-stone-100 bg-stone-50/30 shadow sm:h-96 sm:w-96">
				<Link to={`/projects/${project_id}`}>
					{project_screenshot ? (
						<img
							src={project_screenshot.url}
							alt={project_screenshot.alt}
							className="mx-auto w-72 rounded-lg bg-violet-100 shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg sm:h-48 sm:w-80"
						/>
					) : (
						<img
							src={placeholder}
							alt="placeholder"
							className="mx-auto h-48 w-80 rounded-lg shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
						/>
					)}
				</Link>
				<div className="my-2 flex w-72 flex-col items-center gap-2">
					<h2 className="text-lg font-medium">{project_name}</h2>
					<ul className="flex flex-wrap justify-center gap-1">
						{tech_stack.map(tech => {
							return (
								<li
									key={tech}
									className=" rounded-md bg-orange-100 px-1.5 py-0.5 text-sm uppercase"
								>
									{tech}
								</li>
							);
						})}
					</ul>
					<Link
						to={`/projects/${project_id}`}
						className="mt-3 flex items-center justify-center gap-3 px-1 text-center text-sm font-medium hover:-translate-y-0.5 hover:bg-pink-100"
					>
						Details
					</Link>
				</div>
			</article>
		</>
	);
}
