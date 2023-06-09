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
				expanded ? 'w-1/4' : 'w-1/12'
			}`}
			onMouseEnter={handleHover}
			onMouseLeave={handleMouseLeave}
		>
			<div className="flex items-center overflow-hidden">
				<a href="/#music">
					<FaAsterisk className="mx-6 h-10 w-10 text-orange-400 hover:animate-spin" />
				</a>
				{expanded && (
					<p className="mt-9 h-20 w-52 text-sm">
						Currently listening to{' '}
						<span className="font-bold">{track_name}</span> by {artists}
					</p>
				)}
			</div>
		</div>
	);
}
