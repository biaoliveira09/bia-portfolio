export default function Project({ project_name, project_overview }) {
	return (
		<article className="single-project z-10 h-72 w-80 rounded-xl border-stone-100 bg-stone-100">
			<h2>{project_name}</h2>
			<p>{project_overview}</p>
		</article>
	);
}
