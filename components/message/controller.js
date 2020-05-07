const store = require('./store')

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("User or message is missing");
      reject("Not enough data");
      return false
    }
    console.log(user);
    console.log(message);
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

module.exports = {
  addMessage,
  getMessages
};
