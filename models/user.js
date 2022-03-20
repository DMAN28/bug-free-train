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
      trim: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
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





//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
//     match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
//   }