const API_URL = 'https://biaoliveira.com/bia-portfolio/wp-json/wp/v2/';

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
		const response = await fetch(`${API_URL}projects/?acf_format=standard`);
		const projects = await response.json();
		return projects;
	} catch (error) {
		throw new Error('Failed to retrieve projects');
	}
};

export const getPostsData = async type => {
	try {
		const response = await fetch(`${API_URL}${type}?per_page=50`);
		const tech = await response.json();
		return tech;
	} catch (error) {
		throw new Error('Failed to retrieve posts data');
	}
};

export const getProjectData = async slug => {
	try {
		const response = await fetch(
			`${API_URL}projects/?slug=${slug}&acf_format=standard`
		);
		const projects = await response.json();
		return projects[0]; // Assuming the response is an array, return the first project
	} catch (error) {
		throw new Error('Failed to retrieve project details');
	}
};
