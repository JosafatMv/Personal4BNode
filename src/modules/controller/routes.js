const { authRouter } = require('./auth/auth.controller');
const { personalRouter } = require('./personal/personal.controller');
const { userRouter } = require('./user/user.controller');

module.exports = {
	personalRouter,
	userRouter,
	authRouter,
};
