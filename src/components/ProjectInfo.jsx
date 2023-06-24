import { useState } from 'react';
export default function ProjectInfo({ project_info }) {
	const { highlights, highlights_text, process, process_text } = project_info;
	const [openItem, setOpenItem] = useState(0);

	const handleToggle = index => {
		setOpenItem(openItem === index ? null : index);
	};
	return (
		<div className="join-vertical join  w-full">
			<div className="collapse-arrow join-item collapse bg-violet-100/50">
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
				<div className="collapse-content">
					{highlights_text} Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Nihil, sint recusandae, doloremque at tenetur neque beatae
					doloribus magnam atque explicabo, possimus quisquam aliquam facilis
					non. Deleniti cupiditate consequatur non officia.
				</div>
			</div>

			<div className="collapse-arrow join-item collapse bg-violet-100/50">
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
				<div className="collapse-content">{process_text}</div>
			</div>
		</div>
	);
}
