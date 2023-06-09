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
			className={`fixed bottom-16 right-0 hidden h-20 rounded-full bg-pink-200 transition-all duration-300 md:flex ${
				expanded ? 'md:w-1/3 lg:w-1/4' : 'md:w-1/6 lg:w-1/12'
			}`}
			onMouseEnter={handleHover}
			onMouseLeave={handleMouseLeave}
		>
			<div className="flex items-center overflow-hidden">
				<a href="/#music">
					<FaAsterisk className="mx-5 h-10 w-10 text-orange-400 hover:animate-spin lg:h-8 lg:w-8" />
				</a>
				{expanded && (
					<div className="track-info">
						<p className="mx-auto text-xs md:w-36 lg:w-48 lg:text-sm">
							Currently listening to{' '}
							<span className="font-bold">{track_name}</span> by {artists}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
