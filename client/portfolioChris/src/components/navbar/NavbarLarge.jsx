import React from 'react';
import './Navbar.css';
import { SubNavbar } from './SubNavbar';
export const NavbarLarge = () => {
	return (
		<>
			<div className="NavbarLarge">
				<div className="NavbarLargeTextContent">
					<img
						src="https://openseauserdata.com/files/5c7db0d6e4ea8e09b6476984f8cc2c55.png"
						alt="logo instagram"
						className="NavbarLogoIg"
					/>
					<h2>Chrisnatalx-cv.exe</h2>
				</div>
				<div className="NavbarLargeButtonsContent">
					<button>
						<strong>-</strong>
					</button>
					<button>
						<strong>⬜</strong>
					</button>
					<button style={{ paddingLeft: '3px' }}>
						<strong>X</strong>
					</button>
				</div>
			</div>
			<SubNavbar />
		</>
	);
};
