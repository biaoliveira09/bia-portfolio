export default function Blobs() {
	return (
		<div className="">
			<div className="animation-delay-2000 absolute -left-40 top-12 z-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-30 blur-lg filter "></div>
			<div className="animation-delay-4000 absolute top-20 z-20 h-full w-8/12 animate-blob rounded-full bg-gradient-to-r from-pink-800 to-pink-500 opacity-5 mix-blend-multiply blur-xl filter"></div>
			<div className="absolute -left-0 bottom-24 z-20 h-44 w-44 animate-blob rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-10 blur-lg filter "></div>
			<div className="-bottom-18 absolute -right-20 z-20 h-56 w-56 animate-blob rounded-full bg-indigo-200 opacity-30 blur-lg filter sm:-right-4 sm:top-4"></div>
			<div className="animation-delay-4000 absolute right-44 top-32 z-20 h-24 w-24 animate-blob rounded-full bg-yellow-200 opacity-30 blur-lg filter sm:h-36 sm:w-36"></div>
			<div className="animation-delay-4000 absolute bottom-0 right-72 z-20 h-64 w-64 animate-blob rounded-full bg-violet-300 opacity-30 blur-xl filter"></div>
			{/* <div className="animation-delay-4000 absolute bottom-1.5 right-1 z-20 h-1/2 w-1/4 animate-blob rounded-full bg-gradient-to-r from-lime-100 to-yellow-200 opacity-100 mix-blend-multiply blur-xl filter"></div> */}
			<div className="animation-delay-4000 absolute bottom-1.5 left-28 z-20 h-56 w-56 animate-blob rounded-full bg-gradient-to-r from-lime-100 to-yellow-200 opacity-40 mix-blend-multiply blur-xl filter"></div>
			<div className="animation-delay-4000 absolute bottom-2 right-24 z-20 h-1/2 w-1/4 animate-blob rounded-full bg-orange-300 opacity-20 mix-blend-multiply blur-xl filter"></div>
			<div className="animation-delay-2000 absolute left-24 top-4 z-20 h-1/2 w-1/4 animate-blob rounded-full bg-orange-300 opacity-20 mix-blend-multiply blur-xl filter"></div>
			<div className="animation-delay-2000 absolute bottom-0 right-10 z-20 h-1/4 w-3/4 animate-blob rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-xl filter"></div>
		</div>
	);
}
