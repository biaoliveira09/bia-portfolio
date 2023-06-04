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
		<main className="mx-11 my-8 flex flex-col items-center">
			{isLoaded && (
				<>
					<h1 className="text-lg">{about_heading}</h1>
					<p>{bio}</p>
					<ul className="flex flex-wrap gap-1">
						{tech_stack.map(tech => {
							return (
								<li key={tech} className="bg-lime-200 px-1 uppercase">
									{tech}
								</li>
							);
						})}
					</ul>
				</>
			)}
		</main>
	);
}
