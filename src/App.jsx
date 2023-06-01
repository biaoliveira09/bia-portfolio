import './App.css';
import { useState, useEffect } from 'react';
import { getPages } from './utilities/api';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="projects" element={<Projects />} />
			</Routes>
		</Router>
	);
}

export default App;
