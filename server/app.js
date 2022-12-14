//jshint esversion:6

require("dotenv").config();
require("./db/connection");
const User = require("./model/userSchema");
const express = require("express");

const app = express();
app.use(express.json());
app.use(require("./router/auth"));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build/index.html"));
}

app.listen(process.env.PORT, () => {
	console.log(`Server is running at PORT 8000`);
});
