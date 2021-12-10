const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  pnumber: {
    type: Number,
    required: true,
  },
  
});


const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;

console.log("working")