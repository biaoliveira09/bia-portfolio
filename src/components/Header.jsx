import { NavLink } from 'react-router-dom';

export default function Header({ name, email }) {
	return (
		<header className="m-6 flex items-center justify-around">
			<NavLink to="/">{name ? name : 'Bia Oliveira'}</NavLink>
			<nav className="flex items-center gap-6">
				<NavLink to="about">About</NavLink>
				<NavLink to="projects">Projects</NavLink>

				<a
					href={`mailto:${email}`}
					className="rounded-full bg-pink-600 p-2 px-4 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-amber-500 hover:drop-shadow-lg "
				>
					Let's Talk
				</a>
			</nav>
		</header>
	);
}
