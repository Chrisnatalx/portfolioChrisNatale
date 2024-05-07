import { getProjectsController } from '../controllers/getProjectsController.js';

export const handlerGetProjects = async (req, res) => {
	try {
		const response = await getProjectsController();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};
