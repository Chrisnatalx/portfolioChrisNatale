import React from 'react';
import './IconBar.css';
import { FaTable } from 'react-icons/fa';
import { IoPerson, IoLocationSharp } from 'react-icons/io5';
export const IconBar = () => {
	return (
		<div className="IconBarContainer">
			<div className="IconBarButtonTable">
				<button>
					<FaTable />
				</button>
			</div>
			<div className="IconBarButton">
				<button>
					<IoLocationSharp />
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
