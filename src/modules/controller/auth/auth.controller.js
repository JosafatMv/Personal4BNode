const { Router, Response } = require('express');
const { validateError } = require('../../../utils/functions');
const { login } = require('./auth.gateway');

const signin = async (req, res = Response) => {
	try {
		const { email, password } = req.body;
		const token = await login({ email, password });
		res.status(200).json(token);
	} catch (error) {
		console.log(error);
		const message = validateError(error);
		res.status(400).send({ message });
	}
};

const authRouter = Router();
authRouter.post('/', [], signin);

module.exports = {
	authRouter,
};
