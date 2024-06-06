import React from 'react';
import './Modal.css';
export const Modal = ({ project, onClose }) => {
	if (!project) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close" onClick={onClose}>
					&times;
				</span>
				<h2>{project.name}</h2>
				<img src={project.image} alt={project.name} />
				<p>
					<strong>Technologies:</strong> {project.technologies}
				</p>
				<a href={project.deploy} target="_blank" rel="noopener noreferrer">
					View Project
				</a>
			</div>
		</div>
	);
};
