import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Bounce from './components/Bounce';
import Footer from './components/Footer';
import { getPages } from './utilities/api';
// import { useAbout } from './pages/Home';

const ABOUT_PAGE_ID = 20;

export const useAbout = () => {
	const query = useQuery(
		['pages', ABOUT_PAGE_ID],
		() => getPages(ABOUT_PAGE_ID),
		{
			staleTime: 5 * 60 * 1000,
		}
	);
	return {
		isLoading: query.isLoading,
		isError: query.isError,
		isSuccess: query.isSuccess,
		data: query.data,
		error: query.error,
	};
};

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
				{/* <Bounce /> */}
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
				<Footer />
			</>
		);
	}
}
