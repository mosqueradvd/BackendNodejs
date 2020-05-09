const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require("body-parser");
const socket = require('./socket');
const db = require('./db')
const router = require('./network/routes');

db('mongodb+srv://db_user_tlgram:bHp6L9QzceSgYcpn@cluster0-atgr8.mongodb.net/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use('/app', express.static("public"));

server.listen(3000, () => {
  console.log("App is listening on port http://localhost:3000");
});
