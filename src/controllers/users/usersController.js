const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/User");

// register a user
const registerUserController = expressAsyncHandler(async (req, res) => {
	const { email, firstname, lastname, password } = req?.body;

	// check if user exists
	const userExists = await User.findOne({
		email,
	});

	if (userExists) {
		throw new Error("User already exists");
	}

	// create user
	try {
		const user = await User.create({
			email,
			firstname,
			lastname,
			password,
		});

		res.status(200).json({
			message: "User created successfully",
			user,
		});
	} catch (error) {
		message: error;
	}
});

// fetch all users
const fetchUsersController = expressAsyncHandler(async (req, res) => {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (error) {
		res.json(error);
	}
});

module.exports = { registerUserController, fetchUsersController };
