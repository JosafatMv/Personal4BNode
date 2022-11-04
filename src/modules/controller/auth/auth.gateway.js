const { generateToken } = require('../../../config/jwt');
const { validatePassword } = require('../../../utils/functions');
const { query } = require('../../../utils/mysql');

const login = async (user) => {
	if (!user.email || !user.password) throw Error('Missing fields');
	const sql = `SELECT * FROM users WHERE users email = ? AND status = 1;`;
	const existsUser = query(sql, [user.email, user.password]);
	if (validatePassword(user.password, existsUser[0]?.password))
		return generateToken({
			id: user.id,
			email: user.email,
			role: user.role,
		});
	throw Error('Password mismatch');
};

module.exports = {
	login,
};
