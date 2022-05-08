const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  Author: {
    type: String,
    require: true,
  },

  name: {
    linkImage: String,
    require: true,
  },

  name: {
    linkMusic: String,
    require: true,
  },
});

module.exports = mongooaw.model("Music", musicSchema);
