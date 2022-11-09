const { query } = require('../../../utils/mysql');

// ALTER user 'root'@'localhost' identified
// WITH mysql_native_password BY 'root';
// FLUSH PRIVILEGES;

const findAll = async () => {
	// const sql = 'SELECT * FROM personal pe JOIN position po on pe.position_id = po.id';
	const sql =
		'SELECT pe.*, pu.descripcion FROM personal pe JOIN puesto pu on pe.puesto = pu.id';
	return await query(sql, []);
};

const findById = async (id) => {
	if (!id) throw Error('Missing fields');
	const sql =
		'SELECT pe.*, pu.descripcion FROM personal pe JOIN puesto pu on pe.puesto = pu.id WHERE pe.id = ?';
	return await query(sql, [id]);
};

const save = async (person) => {
	if (
		!person.name ||
		!person.surname ||
		!person.birthday ||
		!person.salary ||
		!person.position.id
	)
		throw Error('Missing fields');

	const sql =
		'INSERT INTO  personal (nombre, apellidoP, apellidoM, fecNac, sueldo, puesto) VALUES (?,?,?,?,?,?);';

	return await query(sql, [
		person.name,
		person.surname,
		person.lastname,
		person.birthday,
		person.salary,
		person.position.id,
	]);
};

module.exports = {
	findAll,
	findById,
	save,
};
