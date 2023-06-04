import { NavLink } from 'react-router-dom';

export default function Navigation({ name }) {
	return (
		<>
			<header className="relative flex h-16 justify-around font-outfit sm:justify-around sm:p-4">
				<div className="fixed z-50 h-10 w-full px-6 py-2 sm:px-8">
					<NavLink to="/">{name ? name : 'Bia Oliveira'}</NavLink>
				</div>
				<nav className=" fixed bottom-2 z-50 flex items-center gap-10 sm:bottom-auto sm:right-10 sm:top-6">
					<NavLink to="about">About</NavLink>
					<NavLink to="projects">Projects</NavLink>
					<NavLink to="contact">Contact</NavLink>
				</nav>
			</header>
			<div className="fixed left-0 right-0 top-0 z-40 h-11 w-full border-t bg-white sm:h-16 sm:w-full"></div>
			<div className="border-left fixed left-0 top-0 z-40 h-full w-6 bg-white sm:w-8"></div>
			<div className="border-right fixed right-0 top-0 z-40 h-full w-6 bg-white sm:w-8"></div>
			<div className="border-bottom fixed bottom-0 left-0 right-0 z-40 h-10 bg-white"></div>
		</>
	);
}
