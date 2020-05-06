const express = require("express");
const PORT = 3000;
const router = express.Router();
const bodyParser = require("body-parser");
const response = require("./network/response");

var app = express();
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get("/message", (req, res) => {
  res.header({
    "custom-header": "Our custom header",
  });
  response.success(req, res, "message list");
});

router.post("/message", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  req.query.error == "ok"
    ? response.error(req, res, "Simulated Error: ", 400)
    : response.success(req, res, "Successfully Created", 201);
});

// app.use('/', (request, response) => {
//   response.send('Hola')
// })

app.use('/app', express.static("public"))

app.listen(PORT);
console.log("App is listening on port http://localhost:3000");
