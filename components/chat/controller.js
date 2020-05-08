const store = require("./store");

function addChat(users) {
  if (!users || !Array.isArray(users)) {
    return reject("Invalid User List");
  }

  const chat = {
    users: users,
  };

  return store.add(chat);
}

function listChats(userId) {
  return store.list(userId);
}