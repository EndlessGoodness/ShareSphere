const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, // Ensure email is stored in lowercase
      match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'] // Regex for basic email validation
    },
    password: { 
      type: String, 
      required: true, 
      minlength: 6 // Enforce a minimum password length in the schema as well
    },
  },
  { timestamps: true } // Add createdAt and updatedAt fields automatically
);

module.exports = mongoose.model('User', UserSchema);
