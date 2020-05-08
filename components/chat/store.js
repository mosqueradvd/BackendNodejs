const Model = require("./model");

function addChat(chat) {
  const myChat = Model(chat);
  return myChat.save()
}

function listChats(userId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { users: userId };
    }
    Model.find(filter)
      .populate("users")
      .exec(
        (error,
        (populated) => {
          if (error) {
            reject(error);
          }

          resolve(populated);
        })
      )
  });
}

module.exports = {
  add: addChat,
  list: listChats
}