import './HomeView.css';

import { Navbar } from '../components/navbar/Navbar';
import { PersonalInformation } from '../components/personalinfo/PersonalInformation';
export const HomeViews = () => {
	return (
		<>
			<div className="HomeViewContainer" id="Home">
				<Navbar />
				<PersonalInformation />
				{/* <IconBar /> */}
			</div>
		</>
	);
};
