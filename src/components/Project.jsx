import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import placeholder from './../assets/placeholder.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';

export default function Project({
	project_name,
	project_screenshot,
	tech_stack,
	project_slug,
}) {
	useEffect(() => {
		const img = new Image();
		if (project_screenshot && project_screenshot.url) {
			img.src = project_screenshot.url;
		} else {
			img.src = placeholder;
		}
	}, [project_screenshot]);

	return (
		<>
			<article
				id="main"
				className="single-project z-30 flex h-80 w-80 flex-col items-center justify-center rounded-xl border-stone-100 bg-stone-50/30 shadow sm:h-80 sm:w-96"
			>
				<Link to={`/projects/${project_slug}`}>
					{project_screenshot && project_screenshot.url ? (
						<img
							src={project_screenshot.url}
							alt={project_screenshot.alt}
							className="mx-auto mb-3 w-72 rounded-xl bg-violet-100 shadow-md  hover:-translate-y-0.5 hover:shadow-lg sm:h-48 sm:w-80"
						/>
					) : (
						<img
							src={placeholder}
							alt="placeholder"
							className="mx-auto mb-3 w-72 rounded-xl shadow-md hover:-translate-y-0.5 hover:shadow-lg"
						/>
					)}
				</Link>
				<div className="my-2 flex w-72 flex-col items-center gap-3">
					<Link
						to={`/projects/${project_slug}`}
						className="flex items-center gap-2 hover:-translate-y-0.5"
					>
						<h2 className="text-xl font-medium">{project_name}</h2>
						<BsArrowUpRightCircle className="h-5 w-5 hover:-translate-y-0.5" />
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
				</div>
			</article>
		</>
	);
}
