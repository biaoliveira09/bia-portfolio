const API_URL = 'http://localhost:8888/bia-portfolio/wp-json/wp/v2/';

export const getPages = async id => {
	try {
		const response = await fetch(`${API_URL}pages/${id}`);
		const pages = await response.json();
		return pages;
	} catch (error) {
		throw new Error('Failed to retrieve pages');
	}
};

export const getProjects = async () => {
	try {
		const response = await fetch(`${API_URL}projects`);
		const projects = await response.json();
		return projects;
	} catch (error) {
		throw new Error('Failed to retrieve projects');
	}
};
