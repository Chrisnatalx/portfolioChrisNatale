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
					<h2>Portfolio.exe</h2>
				</div>
				<div className="NavbarLargeButtonsContent">
					<button>
						<strong>&#8213;</strong>
					</button>
					<button>
						<strong>🗖</strong>
					</button>
					<button style={{ marginLeft: '3px' }}>
						<strong>&#10005;</strong>
					</button>
				</div>
			</div>
			<SubNavbar />
		</>
	);
};
