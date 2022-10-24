const express = require("express");
const dotenv = require("dotenv");
const {connect} = require("./src/utils/db")
const {isAuth} = require("./src/middlewares/auth")

const presidentesRouter = require ("./src/api/routes/presidentes.routes")
const partidosRouter = require ("./src/api/routes/partidos.routes")
const userRouter = require ("./src/api/routes/users.routes")
const PORT = process.env.PORT || 8000;
dotenv.config();

const app = express();
connect ();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/presidents", [isAuth] ,presidentesRouter);
app.use("/parties", partidosRouter);
app.use("/users", userRouter);
app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));