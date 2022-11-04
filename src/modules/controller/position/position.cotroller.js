const { Response } = require('express');
const { validateError } = require('../../../utils/functions');

const getAll = async (req, res = Response) => {
	try {
		const positions = await findAll();
		res.status(200).json(positions);
	} catch (error) {
		console.log(error);
		const message = validateError(error);
		res.status(400).send({ message });
	}
};

const positionRouter = Router();

positionRouter.get('/', [], getAll);

module.exports = {
	positionRouter,
};
