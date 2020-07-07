const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requireString = {
  type: String,
  required: true,
  unique: false,
  minlength: 1,
};

const userSchema = new Schema(
  {
    title: requireString,
    body: requireString,
    footer: requireString,
    googleId: String,
    username: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
