const { hashPassword } = require('../../../utils/functions');
const { query } = require('../../../utils/mysql');

const save = async (user) => {
	if (
		!user.email ||
		!user.password ||
		!user.role ||
		!user.status ||
		!user.personal
	)
		throw Error('Missing fields');

	if (Number.isNaN(user.personal.id)) throw Error('Wrong type');

	const sql = `INSERT INTO users (email, password, role, status, personal_id) VAlUES (?,?,?,?,?);`;

	const password = await hashPassword(user.password);
	const { insertId } = await query(sql, [
		user.email,
		password,
		user.role,
		user.status,
		user.personal.id,
	]);

	delete user.password;
	return { ...user, id: insertId };
};

module.exports = {
	save,
};

// {
//     "email": "20213tn124@utez.edu.mx",
//     "password": "josa",
//     "role": "ADMIN",
//     "personal": {
//         "id": 11
//     }
// }
