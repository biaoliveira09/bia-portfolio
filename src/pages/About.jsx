import { useState, useEffect } from 'react';
import { getPages } from './../utilities/api';
export default function About() {
	const [pageData, setPageData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPages(20).then(data => {
			setPageData(data.acf);
			console.log(data.acf);
			setIsLoaded(true);
		});
	}, []);

	const { about_heading, bio, tech_stack } = pageData;

	return (
		<section className="font-cabin">
			{isLoaded && (
				<>
					<h1>{about_heading}</h1>
					<p>{bio}</p>
					<ul className="flex flex-wrap gap-1">
						{tech_stack.map(tech => {
							return (
								<li
									key={tech}
									className="border border-pink-600 bg-pink-600 p-1 px-2 font-medium uppercase text-white"
								>
									{tech}
								</li>
							);
						})}
					</ul>
				</>
			)}
		</section>
	);
}
