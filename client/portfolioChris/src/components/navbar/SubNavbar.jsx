import React from 'react';
import './SubNavbar.css';
import { useTranslation } from 'react-i18next';

export const SubNavbar = () => {
	const [t, i18n] = useTranslation('global');

	return (
		<>
			{/* <div className="SubNavbarContainer">
				<a href="#Home">
					<h3>{t('navbar.home')}</h3>
				</a>

				<a href="#Projects">
					<h3>{t('navbar.projects')}</h3>
				</a>
				<h3>{t('navbar.help')}</h3>
			</div> */}
			<div className="SubNavbarUsername">
				<h1>ChrisNatalx</h1>
			</div>
		</>
	);
};
