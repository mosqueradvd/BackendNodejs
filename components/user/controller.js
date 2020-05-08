const store = require('./store');

function addUser(){
  if(!name) {
    return Promise.reject('Invalid name');
  }
  const user = {
    name,
  };

  return store.add(user);
}

function getAllUsers() {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

module.exports = {
  addUser,
  getAllUsers
}


