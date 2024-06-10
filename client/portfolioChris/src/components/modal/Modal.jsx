import React from 'react';
import './Modal.css';
import { IoLogoVercel } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
export const Modal = ({ project, onClose }) => {
	if (!project) return null;

	return (
		<div className="modal">
			<div className="modalContent">
				<div className="modalNavbar">
					<h2>{project.name}</h2>
					<button onClick={onClose}>
						<span>X</span>
					</button>
				</div>
				<div className="modalImage">
					<img src={project.image} alt={project.name} />
				</div>

				<h2>
					<strong>Technologies:</strong> {project.technologies}
				</h2>
				<div className="ModalButtons">
					<a href={project.github}>
						<button>
							<FaGithub />
						</button>
					</a>
					<a href={project.deploy} target="_blank" rel="noopener noreferrer">
						<button>
							<IoLogoVercel />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
