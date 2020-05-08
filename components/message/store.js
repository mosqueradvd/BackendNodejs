const Model = require('./model');
const db = require('mongoose');

db.Promise = global.Promise
db.connect('mongodb+srv://db_user_tlgram:bHp6L9QzceSgYcpn@cluster0-atgr8.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

console.log('[DB]: Successfully Connected');

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message)
  myMessage.save();
}

async function getMessages() {
  // return list;
    const messages = await Model.find();
    return messages
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  })

  foundMessage.message = message;
  
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText
};
