import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProjectCards } from './ProjectCards';

import './Projects.css';
import { Modal } from '../modal/Modal';

export const Projects = () => {
	const [data, setData] = useState([]);
	const [selectedProject, setSelectedProject] = useState(null);
	const getProjects = async () => {
		try {
			const response = await axios.get(`${import.meta.env.VITE_URL}`);
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		const fetchProjects = async () => {
			const newProject = await getProjects();
			setData(newProject);
		};
		fetchProjects();
	}, []);

	const handleProjectClick = (project) => {
		setSelectedProject(project);
	};

	const handleCloseModal = () => {
		setSelectedProject(null);
	};

	return (
		<>
			<div className="ProjectContainer">
				{data.length > 0 ? (
					data.map((project) => (
						<ProjectCards
							key={project.id}
							project={project}
							onClick={handleProjectClick}
						/>
					))
				) : (
					<h1>No hay proyectos</h1>
				)}
			</div>
			<Modal project={selectedProject} onClose={handleCloseModal} />
		</>
	);
};
