const mongoose = require('mongoose')

const Schema = mongoose.Schema
const mySchema = new Schema({
  chat: {
    type: Schema.ObjectId
  },
  user: {
    type: Schema.ObjectId,
    required: 'user'
  },
  message: String,
  date: Date,
})

const model = mongoose.model('Message', mySchema);
module.exports = model;