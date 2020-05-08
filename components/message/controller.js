const store = require('./store')

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("User or message is missing");
      reject("Not enough data");
      return false
    }
    console.log(user,message);
    const FullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(FullMessage)
    resolve(FullMessage);
  });
};

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if(!id || !message) {
      reject('Invalid Data')
      return false;
    }
    const result = await store.updateText(id, message);

    resolve(result);
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage
};
