import { NavLink } from 'react-router-dom';

export default function Header({ name }) {
	return (
		<>
			<header className="relative flex h-16 justify-around bg-white p-2 sm:justify-around sm:p-4">
				<div className="sticky z-50 h-10 w-full px-5 py-2">
					<NavLink to="/">{name ? name : 'Bia Oliveira'}</NavLink>
				</div>
				<nav className="w-100 fixed bottom-2 z-50 flex items-center gap-10 sm:bottom-auto sm:right-20 sm:top-6">
					<NavLink to="about">About</NavLink>
					<NavLink to="projects">Projects</NavLink>
					<NavLink to="contact">Contact</NavLink>
				</nav>
			</header>
			<div className="border-left fixed left-0 top-0 z-40 h-full w-6 bg-white sm:w-8"></div>
			<div className="border-right fixed right-0 top-0 z-40 h-full w-6 bg-white sm:w-8"></div>
			<div className="border-top fixed bottom-0 left-0 right-0 z-40 h-10 bg-white"></div>
		</>
	);
}
