const express = require('express');
const cors = require('cors');
const {
	personalRouter,
	userRouter,
	authRouter,
} = require('../modules/controller/routes');
require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(
	cors({
		origins: '*',
	})
);

app.use(
	express.json({
		limit: '50mb',
	})
);

app.get('/', (request, response) => {
	response.send('Bienvenid@ a la AppRest Personal');
});

app.use('/api/personal', personalRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

module.exports = {
	app,
};
