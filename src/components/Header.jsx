import { NavLink } from 'react-router-dom';

export default function Header({ name }) {
	return (
		<>
			<header className="flex items-center justify-around bg-white p-5">
				<NavLink to="/">{name ? name : 'Bia Oliveira'}</NavLink>
				<nav className="sticky flex items-center gap-10">
					<NavLink to="about">About</NavLink>
					<NavLink to="projects">Projects</NavLink>
					<NavLink to="contact">Contact</NavLink>
				</nav>
			</header>
			<div className="border-left fixed left-0 top-0 z-50 h-full w-8 bg-white"></div>
			<div className="border-right fixed right-0 top-0 z-50 h-full w-8 bg-white"></div>
			<div className="border-top fixed bottom-0 left-0 right-0 z-50 h-8 bg-white"></div>
		</>
	);
}
