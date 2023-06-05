import { useState, useEffect } from 'react';
import { getPages } from './../utilities/api';
import { getTechStack } from './../utilities/api';

export default function About() {
	const [pageData, setPageData] = useState([]);
	const [techStack, setTechStack] = useState([]);

	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPages(20).then(data => {
			setPageData(data.acf);
			console.log(data.acf);
			setIsLoaded(true);
		});
	}, []);

	useEffect(() => {
		getTechStack().then(data => {
			setTechStack(data);
			console.log(data);
			setIsLoaded(true);
		});
	}, []);

	const { about_heading, bio } = pageData;

	return (
		<main className="mx-11 my-8 flex flex-col">
			{isLoaded && (
				<>
					<h1 className="text-lg">{about_heading}</h1>
					<p>{bio}</p>
					<ul>
						{techStack.map(tech => {
							return <li key={tech.id}>{tech.title.rendered}</li>;
						})}
					</ul>
				</>
			)}
		</main>
	);
}
