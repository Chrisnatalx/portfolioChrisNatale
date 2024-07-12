import React from 'react';
import './Modal.css';
import { IoLogoVercel } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
export const Modal = ({ project, onClose }) => {
	if (!project) return null;

	const [t] = useTranslation('global');
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
					<strong>{t('modal.technologies')}</strong> {project.technologies}
				</h2>
				<div className="ModalButtons">
					<a href={project.github} target="_blank" rel="noopener noreferrer">
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
