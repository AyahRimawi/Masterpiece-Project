const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {
    governorate: { 
      type: String, 
      enum: ['Amman', 'Zarqa'],
      required: true 
    },
    details: { type: String, required: true }
  },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  indexes: [
    { email: 1 },
    { 'address.governorate': 1 }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;