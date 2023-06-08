export default function ProjectInfo(projectData) {
	console.log(projectData);
	const { highlights, process } = projectData;
	return (
		<section className="flex flex-col justify-center gap-3">
			<div className="collapse-plus collapse bg-translucentviolet">
				<input type="radio" name="my-accordion-3" checked="checked" />
				<div className="collapse-title text-xl font-medium">Highlights</div>
				<div className="collapse-content">
					<p>{highlights}</p>
				</div>
			</div>
			<div className="collapse-plus collapse bg-translucentviolet">
				<input type="radio" name="my-accordion-3" />
				<div className="collapse-title text-xl font-medium">Process</div>
				<div className="collapse-content">
					<p>{process}</p>
				</div>
			</div>
			<div className="collapse-plus collapse bg-translucentviolet">
				<input type="radio" name="my-accordion-3" />
				<div className="collapse-title text-xl font-medium">
					Click to open this one and close others
				</div>
				<div className="collapse-content">
					<p>hello</p>
				</div>
			</div>
		</section>
	);
}
