import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Bounce from './components/Bounce';
import Footer from './components/Footer';
import { useAbout } from './pages/Home';

export default function App() {
	const {
		isSuccess,
		isError,
		isLoading,
		data: contactInfo,
		error,
	} = useAbout();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error: {error.message}</p>;
	}
	if (isSuccess) {
		const { name, email_address, github_profile_link, linkedin_profile_link } =
			contactInfo.acf;
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
}
