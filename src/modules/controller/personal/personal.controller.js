const { Response, Router } = require("express");
const { checkRoles, auth } = require("../../../config/jwt");
const { validateError } = require("../../../utils/functions");
const { findAll, findById, save } = require("./personal.gateway");

const getAll = async (req, res = Response) => {
	try {
		const results = await findAll();
		res.status(200).json(results);
	} catch (err) {
		console.log(err);
		const message = validateError(err);
		res.status(400).json({ message });
	}
};

const getById = async (req, res = Response) => {
	try {
		const { id } = req.params;
		if (Number.isNaN(id)) throw Error("Wrong type");
		const results = await findById(id);
		res.status(200).json(results);
	} catch (err) {
		console.log(err);
		const message = validateError(err);
		res.status(400).json({ message });
	}
};

const insert = async (req, res = Response) => {
	try {
		const { name, surname, lastname, birthday, salary, position } =
			req.body;
		const results = await save({
			name,
			surname,
			lastname,
			birthday,
			salary,
			position,
		});

		const personRegistered = {
            id: results.insertId,
			name,
			surname,
			lastname,
			birthday,
			salary,
			position,
		};

		res.status(200).json(personRegistered);
	} catch (err) {
		console.log(err);
		const message = validateError(err);
		res.status(400).json({ message });
	}
};

const personalRouter = Router();
personalRouter.get("/", [auth, checkRoles(['ADMIN'])], getAll); //GET -> !body
personalRouter.get("/:id", [], getById);
personalRouter.post("/", [], insert); //POST -> body

module.exports = {
	personalRouter,
};
