import React from 'react';
import './PersonalInformation.css';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';

export const PersonalInformation = () => {
	return (
		<>
			<div className="personalInformation">
				<div className="imageContainer">
					<img
						src="https://res.cloudinary.com/decjjrdmm/image/upload/v1705609984/83377576_2_fjiawt.jpg"
						alt="Foto perfil"
					/>
				</div>
				<div className="InfoContainer">
					<div className="Information">
						<h1>26</h1>
						<h1>10</h1>
						<h1>2</h1>
						<h1>Edad</h1>
						<h1>Proyectos</h1>
						<h1>Idiomas</h1>
					</div>
					<div className="Button">
						<a href="https://drive.google.com/file/d/1enPsbQqd5HSkiwx2XSzuVH6gda9Ra5LG/view?usp=sharing">
							<button className="cvButton">
								<h1>
									<strong>Download CV</strong>
								</h1>
							</button>
						</a>
					</div>
				</div>
				<div className="presentationInfo">
					<h1>Christian Natale.</h1>
					<h1>FullStack Developer</h1>
					<h2>
						<strong>Ver Traduccion</strong>
					</h2>
					<div className="ButtonsPersonal">
						<a href="https://github.com/Chrisnatalx" target="_blank">
							<FaGithub />
						</a>
						<a href="mailTo:natale.christian.a@gmail.com">
							<BiLogoGmail />
						</a>
						<a
							href="https://www.linkedin.com/in/christian-natale-/"
							target="_blank"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
