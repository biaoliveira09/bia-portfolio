import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Bounce from './components/Bounce';
import { getPages } from './utilities/api';
import Footer from './components/Footer';
// import { useQuery } from 'react-query';
import { getPostsData } from './utilities/api';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	const [contactInfo, setContactInfo] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPages(20).then(data => {
			setContactInfo(data.acf);
			console.log(data.acf);
			setIsLoaded(true);
		});
	}, []);

	const { name, email_address, github_profile_link, linkedin_profile_link } =
		contactInfo;

	return (
		<>
			<Bounce />
			<Router>
				<Navigation
					name={name}
					email_address={email_address}
					github_profile_link={github_profile_link}
					linkedin_profile_link={linkedin_profile_link}
				/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="projects/:project_id" element={<ProjectDetails />} />
				</Routes>
			</Router>
			{/* <Footer /> */}
		</>
	);
}

export default App;
