const mongoose = require("mongoose");

const DeveloperSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Developer", DeveloperSchema);
