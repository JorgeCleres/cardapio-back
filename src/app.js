const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongooseConnection = require("./config/mongooseConnection.config");
const helmet = require("helmet");
//const csrf = require("csurf");

const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");
const produtosRoutes = require("./routes/produtos.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
//app.use(csrf());

app.set("mongoose connection", mongooseConnection);

app.use(index);
app.use("", userRoutes);
app.use("", produtosRoutes);

module.exports = app;
