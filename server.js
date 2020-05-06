const PORT = 3000;
const express = require('express')
const bodyParser = require("body-parser");
// const router = require('./components/message/network');
const router = require('./network/routes')

var app = express();
// app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app)

app.use('/app', express.static("public"))
app.listen(PORT);
console.log("App is listening on port http://localhost:3000");
