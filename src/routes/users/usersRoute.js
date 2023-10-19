const express = require("express");
const { registerUserController, fetchUsersController } = require("../../controllers/users/usersController");
const userRoute = express.Router();

userRoute.post("/register", registerUserController);
userRoute.get("/", fetchUsersController);
// userRoute.put("/register", registerUser);
// userRoute.delete("/register", registerUser);

module.exports = userRoute;
