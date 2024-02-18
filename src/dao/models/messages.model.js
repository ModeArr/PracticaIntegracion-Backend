const mongoose = require("mongoose");

const collectionName = "messages";

const messagesSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

const messagesModel = mongoose.model(collectionName, messagesSchema);
module.exports = messagesModel;