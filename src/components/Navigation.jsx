import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { HashLink } from 'react-router-hash-link';

export default function Navigation({
	name,
	email_address,
	github_profile_link,
	linkedin_profile_link,
}) {
	return (
		<>
			<header className="relative flex h-14 justify-around sm:justify-around sm:p-5">
				<div className="fixed z-50 h-10 w-full px-6 py-3 sm:px-8 sm:py-1">
					<HashLink smooth to="/#" className="sm:hover:-translate-y-0.5">
						{name}
					</HashLink>
				</div>
				<nav className="site-nav fixed bottom-4 z-50 flex items-center gap-20 text-lg sm:bottom-auto sm:right-10 sm:top-6 sm:gap-16 sm:text-base ">
					{/* <a href="/#projects" className="sm:hover:-translate-y-0.5">
						Projects
					</a> */}
					<HashLink
						smooth
						to="/#projects"
						className="sm:hover:-translate-y-0.5"
					>
						Projects
					</HashLink>
					<HashLink smooth to="/#about" className="sm:hover:-translate-y-0.5">
						About
					</HashLink>
				</nav>
				<nav className="social-nav fixed hidden gap-5 sm:bottom-2 sm:right-10 sm:z-50 sm:flex sm:items-center">
					<a
						href={linkedin_profile_link}
						className="hover:text-pink-600"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn profile"
					>
						<BsLinkedin
							className="h-5 w-5 hover:-translate-y-0.5"
							aria-label="LinkedIn icon"
						/>
					</a>
					<a
						href={github_profile_link}
						className="hover:text-pink-600"
						target="_blank"
						rel="noreferrer"
						aria-label="Github profile"
					>
						<BsGithub
							className="h-5 w-5 hover:-translate-y-0.5"
							aria-label="GitHub icon"
						/>
					</a>
					<a
						href={`mailto:${email_address}`}
						className="flex gap-1 hover:text-pink-600"
						target="_blank"
						rel="noreferrer"
						aria-label="Send email to bia@biaoliveira.com"
					>
						<MdEmail
							className="h-6 w-6 hover:-translate-y-0.5"
							aria-label="Email icon"
						/>
					</a>
				</nav>
			</header>
			<div className="fixed left-0 right-0 top-0 z-40 h-12 w-full border-t bg-white sm:h-16 sm:w-full"></div>
			<div className="border-left fixed left-0 top-0 z-40 h-full w-6 bg-white sm:w-8"></div>
			<div className="border-right fixed right-0 top-0 z-40 h-full w-6 bg-white sm:w-8"></div>
			<div className="border-bottom fixed bottom-0 left-0 right-0 z-40 h-14 bg-white sm:h-10"></div>
		</>
	);
}
