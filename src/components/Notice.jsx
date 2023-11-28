import { useState } from 'react';
import { FaExclamation } from 'react-icons/fa';
function Notice() {
	const [expanded, setExpanded] = useState(false);

	const handleHover = () => {
		setExpanded(true);
	};

	const handleMouseLeave = () => {
		setExpanded(false);
	};
	return (
		<div
			className={`fixed bottom-36 right-0 z-30 hidden h-20 max-w-sm cursor-pointer rounded-full bg-pink-200 transition-all duration-700 md:flex ${
				expanded ? 'hover:bg-pink-300 md:w-1/3 lg:w-1/4' : 'md:w-28'
			}`}
			onMouseEnter={handleHover}
			onMouseLeave={handleMouseLeave}
		>
			<div className="flex items-center overflow-hidden">
				<a href="https://exclamationmark.ca/" target="_blank">
					<FaExclamation className="mx-5 h-8 w-8 text-pink-700 transition-transform hover:scale-110 hover:text-pink-600 active:text-pink-700" />
				</a>
				{expanded && (
					<div className="track-info">
						<p className="mx-auto text-xs md:w-8/12 lg:w-11/12 lg:p-1 lg:pr-8 xl:text-sm">
							Client projects are now featured on the{' '}
							<a
								href="https://exclamationmark.ca/"
								target="_blank"
								className="font-semibold underline"
							>
								Exclamation Mark Studio
							</a>{' '}
							website.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
export default Notice;
