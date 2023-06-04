import placeholder from '../assets/flixr-placeholder.png';
export default function Project({ project_name, project_overview }) {
	return (
		<>
			<article className="single-project z-30 flex h-64 w-72 flex-col items-center justify-center rounded-xl border-stone-100 bg-stone-100">
				<img
					src={placeholder}
					alt="placeholder"
					className="animation-delay-2000 w-64 rounded shadow-xl transition-transform hover:-translate-y-2 hover:shadow-2xl"
				/>
				<div className="project-info flex items-center gap-14 text-stone-400">
					<h2 className="my-2">{project_name}</h2>
					{/* <p>{project_overview}</p> */}
					<a href="">Details</a>
				</div>
			</article>
		</>
	);
}
