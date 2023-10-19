const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersController");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFoundHandler } = require("./middlewares/errorMiddleware");
const app = express();

// environmental variable
dotenv.config();

// dbConnect
dbConnect();

// middleware
app.use(express.json());

// routes
app.use("/api/users", userRoute);

// error handler
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
