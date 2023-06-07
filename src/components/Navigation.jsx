import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { NavLink } from 'react-router-dom';

export default function Navigation({
	name,
	email_address,
	github_profile_link,
	linkedin_profile_link,
}) {
	return (
		<>
			<header className="relative flex h-14 justify-around sm:justify-around sm:p-4">
				<div className="fixed z-50 h-10 w-full px-6 py-2 sm:px-8">
					<NavLink to="/">{name}</NavLink>
				</div>
				<nav className="site-nav fixed bottom-2 z-50 flex items-center gap-16 sm:bottom-auto sm:right-10 sm:top-6">
					<NavLink to="about">About</NavLink>
					{/* <NavLink to="projects">Projects</NavLink> */}
					{/* <NavLink to="contact">Contact</NavLink> */}
				</nav>
				<nav className="social-nav fixed hidden gap-4 sm:bottom-2 sm:right-10 sm:z-50 sm:flex sm:items-center">
					<a href={linkedin_profile_link} className="hover:text-amber-500">
						<BsLinkedin className="h-5 w-5" />
					</a>
					<a href={github_profile_link} className="hover:text-amber-500">
						<BsGithub className="h-5 w-5" />
					</a>
					<a href={`mailto:${email_address}`} className="hover:text-amber-500">
						<MdEmail className="h-6 w-6" />
					</a>
				</nav>
			</header>
			<div className="fixed left-0 right-0 top-0 z-40 h-11 w-full border-t bg-white sm:h-16 sm:w-full"></div>
			<div className="border-left fixed left-0 top-0 z-40 h-full w-6 bg-white sm:w-8"></div>
			<div className="border-right fixed right-0 top-0 z-40 h-full w-6 bg-white sm:w-8"></div>
			<div className="border-bottom fixed bottom-0 left-0 right-0 z-40 h-10 bg-white"></div>
		</>
	);
}
