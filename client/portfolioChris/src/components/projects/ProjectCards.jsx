import React from 'react';
import './ProjectCards.css';

export const ProjectCards = ({ project, onClick }) => {
	const { name, image } = project;

	return (
		<div className="ProjectCard" onClick={() => onClick(project)}>
			<img src={image} alt={name} />
		</div>
	);
};
