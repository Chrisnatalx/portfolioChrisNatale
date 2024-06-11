import React from 'react';
import './HomeView.css';

import { Navbar } from '../components/navbar/Navbar';
import { PersonalInformation } from '../components/personalinfo/PersonalInformation';
import { IconBar } from '../components/iconBar/IconBar';
export const HomeViews = () => {
	return (
		<>
			<div className="HomeViewContainer" id="Home">
				<Navbar />
				<PersonalInformation />
				<IconBar />
			</div>
		</>
	);
};
