import React from 'react';
import './IconBar.css';
import { FaTableCells, FaLocationDot } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
export const IconBar = () => {
	return (
		<div className="IconBarContainer">
			<div className="IconBarButton">
				<button>
					<FaTableCells />
				</button>
			</div>
			<div className="IconBarButton">
				<button>
					<FaLocationDot />
				</button>
			</div>
			<div className="IconBarButton">
				<button>
					<IoPerson />
				</button>
			</div>
		</div>
	);
};
