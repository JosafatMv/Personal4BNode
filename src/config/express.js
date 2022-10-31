const express = require("express");
const cors = require("cors");
const { personalRouter } = require("../modules/controller/routes");
require("dotenv").config();

const app = express();

app.set("port", process.env.PORT || 3000)

app.use(
    cors({
    origins: "*"
    })
);

app.use(
    express.json({
        limit: '50mb'
    })
);

app.get("/", (request, response) => {
    response.send("Bienvenid@ a la AppRest Personal")
})

app.use("/api/personal", personalRouter)


module.exports = {
    app
}