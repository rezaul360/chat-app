const mongoose = require("mongoose");

const messageSchma = new mongoose.Schema(
  {
    chatId: String,
    senderId: String,
    text: String,
  },
  { timestamps: true }
);

const messageModel = mongoose.model("Message", messageSchma);

module.exports = messageModel;
