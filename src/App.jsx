import './App.css';
import { useState, useEffect } from 'react';
import { getPages } from './utilities/api';
import Projects from './components/Projects';
import Nav from './components/Nav';

function App() {
	const [pageData, setPageData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPages(20).then(data => {
			setPageData(data);
			console.log(data);
			setIsLoaded(true);
		});
	}, []);

	// const {
	// 	name,
	// 	email_address,
	// 	short_intro,
	// 	github_profile_link,
	// 	linkedin_profile_link,
	// } = pageData.acf;

	return (
		<>
			{isLoaded && (
				<>
					<Nav name={pageData.acf.name} email={pageData.acf.email_address} />
					<h1 className="text-3xl font-bold text-pink-600">
						{pageData.acf.short_intro}
					</h1>
					<a href={pageData.acf.github_profile_link}>Github</a>
					<a href={pageData.acf.linkedin_profile_link}>LinkedIn</a>
					<Projects />
				</>
			)}
		</>
	);
}

export default App;
