import { useState } from 'react';
import { FaAsterisk } from 'react-icons/fa';

export default function MusicAlert({ track_name, artists }) {
	const [expanded, setExpanded] = useState(false);

	const handleHover = () => {
		setExpanded(true);
	};

	const handleMouseLeave = () => {
		setExpanded(false);
	};

	return (
		<div
			className={`fixed bottom-16 right-0 hidden h-20 max-w-sm rounded-full bg-pink-700 transition-all duration-700 md:flex ${
				expanded ? 'hover:bg-pink-300 md:w-1/3 lg:w-1/4' : 'md:w-28'
			}`}
			onMouseEnter={handleHover}
			onMouseLeave={handleMouseLeave}
		>
			<div className="flex items-center overflow-hidden">
				<a href="/#music">
					<FaAsterisk className="mx-5 h-10 w-10 text-stone-50 hover:animate-spin hover:text-pink-600 active:text-pink-700" />
				</a>
				{expanded && (
					<div className="track-info">
						<p className="mx-auto text-xs md:w-8/12 lg:w-11/12 lg:p-1 lg:pr-8 xl:text-sm">
							Currently listening to{' '}
							<a href="/#music" className="underline">
								<span className="font-bold">{track_name}</span> by {artists}
							</a>
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
