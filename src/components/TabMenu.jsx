import { useState, useLayoutEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const TabMenu = () => {
	const [activeTab, setActiveTab] = useState('home');

	useLayoutEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveTab(entry.target.id);
					}
				});
			},
			{ threshold: 0.2 }
		);

		const sections = document.querySelectorAll('section');
		sections.forEach(section => observer.observe(section));

		return () => {
			sections.forEach(section => observer.unobserve(section));
		};
	}, []);

	const handleTabClick = tab => {
		setActiveTab(tab);
	};

	return (
		<div className="flex items-center justify-center">
			<div className="fixed bottom-5 z-40 w-10/12 rounded-full  border border-pink-300 bg-pink-100 text-center shadow-sm sm:hidden">
				<ul className="flex items-center justify-around p-1">
					<li
						onClick={() => handleTabClick('home')}
						className={`w-1/3 cursor-pointer rounded-full py-2 ${
							activeTab === 'home'
								? 'border border-pink-300 bg-pink-100 text-pink-600'
								: 'border border-transparent text-pink-600'
						}`}
					>
						<HashLink smooth to="/#" className="sm:hover:-translate-y-0.5">
							Home
						</HashLink>
					</li>
					<li
						onClick={() => handleTabClick('projects')}
						className={`w-1/3 cursor-pointer rounded-full py-2 ${
							activeTab === 'projects'
								? 'border border-pink-300 bg-pink-100 text-pink-600'
								: 'border border-transparent text-pink-600'
						}`}
					>
						<HashLink
							smooth
							to="/#projects"
							className="sm:hover:-translate-y-0.5"
						>
							Projects
						</HashLink>
					</li>
					<li
						onClick={() => handleTabClick('about')}
						className={`w-1/3 cursor-pointer rounded-full py-2 ${
							activeTab === 'about'
								? 'border border-pink-300 bg-pink-100 text-pink-600'
								: 'border border-transparent text-pink-600'
						}`}
					>
						<HashLink smooth to="/#about" className="sm:hover:-translate-y-0.5">
							About
						</HashLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TabMenu;
