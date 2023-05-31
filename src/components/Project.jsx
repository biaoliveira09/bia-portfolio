export default function Project({ project_name, project_overview }) {
	return (
		<div>
			<h2>{project_name}</h2>
			<p>{project_overview}</p>
		</div>
	);
}
