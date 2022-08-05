const { model, Schema } = require("mongoose");

const UserSchema = Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

module.exports = model("user", UserSchema, "users");
