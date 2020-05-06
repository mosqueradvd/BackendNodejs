const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("User or message is missing");
      reject("Not enough data");
    }
    console.log(user);
    console.log(message);
    const FullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    resolve(FullMessage);
  });

  console.log(FullMessage);
};

module.exports = {
  addMessage,
};
