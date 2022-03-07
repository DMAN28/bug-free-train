const { Schema, model } = require('mongoose');

const newUser = new Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    userEmail: {
      type: String,
      unique: true,
      required: true,
      trim: true
      // Must match a valid email address (look into Mongoose's matching validation)
    },
    userThoughts: {
      //Array of _id values referencing the Thought model
    },
    userFriends: {
      //Array of _id values referencing the User model (self-reference)
    },
    timestamps: true
  });