import { Link } from 'react-router-dom';
import placeholder from './../assets/placeholder.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { ImArrowUpRight2 } from 'react-icons/im';

export default function Project({
	project_name,
	project_id,
	project_screenshot,
	tech_stack,
}) {
	return (
		<>
			<article className="single-project z-30 flex h-80 w-80 flex-col items-center justify-center rounded-xl border-stone-100 bg-stone-50/30 shadow sm:h-80 sm:w-96">
				<Link to={`/projects/${project_id}`}>
					{project_screenshot ? (
						<img
							src={project_screenshot.url}
							alt={project_screenshot.alt}
							className="mx-auto mb-3 w-72 rounded-lg bg-violet-100 shadow-md  hover:-translate-y-0.5 hover:shadow-lg sm:h-48 sm:w-80"
						/>
					) : (
						<img
							src={placeholder}
							alt="placeholder"
							className="mx-auto mb-3 h-48 w-80 rounded-lg shadow-md hover:-translate-y-0.5 hover:shadow-lg"
						/>
					)}
				</Link>
				<div className="my-2 flex w-72 flex-col items-center gap-3">
					<Link
						to={`/projects/${project_id}`}
						className="flex items-center gap-2 hover:-translate-y-0.5"
					>
						<h2 className="text-xl font-medium">{project_name}</h2>
						<BsArrowUpRightCircle className="h-5 w-5 hover:-translate-y-0.5" />
						{/* <ImArrowUpRight2 className="h-4 w-4 hover:-translate-y-0.5" /> */}
					</Link>
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
					{/* <Link
						to={`/projects/${project_id}`}
						className="mt-3 flex items-center justify-center gap-3 px-1 text-center text-sm font-medium hover:-translate-y-0.5 hover:bg-pink-100"
					>
						Details
					</Link> */}
				</div>
			</article>
		</>
	);
}
