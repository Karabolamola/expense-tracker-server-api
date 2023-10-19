const mongoose = require("mongoose");

const dbConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log("Connected to MongoDB successfully");
	} catch (error) {
		console.log(`ERROR:: ${error.message}`);
	}
};

module.exports = dbConnect;
