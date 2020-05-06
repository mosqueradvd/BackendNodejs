const express = require('express');
const router = express.Router();
const response = require('../../network/response')

router.get("/", (req, res) => {
  res.header({
    "custom-header": "Our custom header",
  });
  response.success(req, res, "message list");
});

router.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  req.query.error == "ok"
    ? response.error(req, res, "unexpected error has occurred: ", 500, 'Internal server error')
    : response.success(req, res, "Successfully Created", 201);
});

module.exports = router;