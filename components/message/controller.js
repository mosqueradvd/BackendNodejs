const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error("[messageController]: Chat, user or message is missing");
      reject("Not enough data");
      return false;
    }
    console.log(user, message);
    const FullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(FullMessage);
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
