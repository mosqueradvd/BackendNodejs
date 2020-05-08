const PORT = 3000;
const express = require('express')
const bodyParser = require("body-parser");
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://db_user_tlgram:bHp6L9QzceSgYcpn@cluster0-atgr8.mongodb.net/test');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app)

app.use('/app', express.static("public"))
app.listen(PORT);
console.log("App is listening on port http://localhost:3000");
