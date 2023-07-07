import { useState } from 'react';
import { BiMusic } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';

export default function MusicAlert({ track_name, artists }) {
	const [expanded, setExpanded] = useState(false);

	const handleHover = () => {
		setExpanded(true);
	};

	const handleMouseLeave = () => {
		setExpanded(false);
	};

	return (
		<HashLink smooth to="/#music">
			<div
				className={`fixed bottom-16 right-0 z-30 hidden h-20 max-w-sm cursor-pointer rounded-full bg-pink-700 transition-all duration-700 md:flex ${
					expanded ? 'hover:bg-pink-300 md:w-1/3 lg:w-1/4' : 'md:w-28'
				}`}
				onMouseEnter={handleHover}
				onMouseLeave={handleMouseLeave}
			>
				<div className="flex items-center overflow-hidden">
					<BiMusic className="mx-5 h-10 w-10 text-stone-50 transition-transform hover:scale-105 hover:text-pink-600 active:text-pink-700" />
					{expanded && (
						<div className="track-info">
							<p className="mx-auto text-xs md:w-8/12 lg:w-11/12 lg:p-1 lg:pr-8 xl:text-sm">
								Currently listening to{' '}
								<span className="font-bold underline">{track_name}</span> by{' '}
								{artists}
							</p>
						</div>
					)}
				</div>
			</div>
		</HashLink>
	);
}
