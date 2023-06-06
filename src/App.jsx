import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blobs from './components/Blobs';
import Bounce from './components/Bounce';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			{/* <Blobs /> */}
			<Bounce />
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="projects" element={<Projects />} />
					<Route path="contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
