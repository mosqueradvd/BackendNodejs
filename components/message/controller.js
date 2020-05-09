const store = require("./store");
const socket = require('../../socket').socket;

function addMessage(user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error("[messageController]: Chat, user or message is missing");
      reject("Not enough data");
      return false;
    }

    let fileUrl = '';
    if(file){
      fileUrl = 'http://localhost:3000/app/files/' + file.filename;
    }

    const FullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl
    };
    store.add(FullMessage);

    socket.io.emit('message', FullMessage)

    resolve(FullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid Data");
      return false;
    }
    const result = await store.updateText(id, message);

    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Invalid Id");
      return false;
    }

    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}


module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
