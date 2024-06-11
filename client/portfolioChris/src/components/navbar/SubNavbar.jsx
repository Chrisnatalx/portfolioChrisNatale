import React from 'react';
import './SubNavbar.css';
export const SubNavbar = () => {
	return (
		<>
			<div className="SubNavbarContainer">
				<a href="#Home">
					<h3>Inicio</h3>
				</a>

				<a href="#Projects">
					<h3>Proyectos</h3>
				</a>
				<h3>Ayuda</h3>
			</div>
			<div className="SubNavbarUsername">
				<h1>ChrisNatalx</h1>
			</div>
		</>
	);
};
