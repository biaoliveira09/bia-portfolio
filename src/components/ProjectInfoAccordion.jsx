import { useState } from 'react';

export default function ProjectInfoAccordion({ project_info }) {
	const { highlights, highlights_text, process, process_text } = project_info;
	const [openItem, setOpenItem] = useState(0);

	const handleToggle = index => {
		setOpenItem(openItem === index ? null : index);
	};

	return (
		<section className="project-accordion flex flex-col items-center">
			<div className="project-info join-vertical join w-full bg-stone-50/50 lg:w-5/6">
				<div className="collapse-arrow join-item collapse border border-pink-700">
					<input
						type="radio"
						name="my-accordion-4"
						id="my-accordion-0"
						checked={openItem === 0}
						readOnly
					/>
					<label
						htmlFor="my-accordion-0"
						className="collapse-title cursor-pointer text-xl font-medium"
						onClick={() => handleToggle(0)}
					>
						{highlights}
					</label>
					<div
						className="collapse-content"
						dangerouslySetInnerHTML={{ __html: highlights_text }}
					></div>
				</div>

				<div className="collapse-arrow join-item collapse border border-pink-700">
					<input
						type="radio"
						name="my-accordion-4"
						id="my-accordion-1"
						checked={openItem === 1}
						readOnly
					/>
					<label
						htmlFor="my-accordion-1"
						className="collapse-title cursor-pointer text-xl font-medium"
						onClick={() => handleToggle(1)}
					>
						{process}
					</label>
					<div
						className="collapse-content"
						dangerouslySetInnerHTML={{ __html: process_text }}
					></div>
				</div>
			</div>
		</section>
	);
}
