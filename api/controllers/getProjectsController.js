import Projects from '../models/Projects.js';

export const getProjectsController = async () => {
	const projectsDB = await Projects.findAll();
	console.log(projectsDB);
	const newProject = projectsDB.map((project) => {
		return {
			id: project.id,
			name: project.name,
			image: project.image,
			deploy: project.deploy,
			technologies: project.technologies,
			github: project.github,
		};
	});
	return newProject;
};
