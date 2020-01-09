const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	phone: Number,
	conversations: [Schema.Types.ObjectId],
	groups: [Schema.Types.ObjectId],
	favourites: [Schema.Types.ObjectId],
	images: String,
	online: Boolean,
	isWriting: Boolean
});

module.exports = user = mongoose.model("user", userSchema);