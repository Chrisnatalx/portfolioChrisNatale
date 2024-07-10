import React, { useState } from 'react';
import './PersonalInformation.css';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';

export const PersonalInformation = () => {
	const [t, i18n] = useTranslation('global');

	const [language, setLanguage] = useState('es');

	const ChangeLanguages = () => {
		const newLanguage = language === 'es' ? 'en' : 'es';
		setLanguage(newLanguage);
		i18n.changeLanguage(newLanguage);
	};

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
						<h1>{t('personalInfo.age')}</h1>
						<h1>{t('personalInfo.projects')}</h1>
						<h1>{t('personalInfo.languages')}</h1>
					</div>
					<div className="Button">
						<a href="https://drive.google.com/file/d/1enPsbQqd5HSkiwx2XSzuVH6gda9Ra5LG/view?usp=sharing">
							<button className="cvButton">
								<h1>
									<strong>{t('personalInfo.button')}</strong>
								</h1>
							</button>
						</a>
					</div>
				</div>
				<div className="presentationInfo">
					<h1>Christian Natale.</h1>
					<h1>FullStack Developer</h1>
					<h2>
						<strong onClick={ChangeLanguages}>
							{t('personalInfo.translate')}
						</strong>
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
