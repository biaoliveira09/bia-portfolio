export default function Nav({ name, email }) {
	return (
		<nav className="flex justify-between">
			<h1>{name}</h1>
			{/* add about and projects links */}
			<a
				href={`mailto:${email}`}
				className="rounded-full bg-pink-600 p-2 px-4 text-white"
			>
				Let's Talk
			</a>
		</nav>
	);
}
