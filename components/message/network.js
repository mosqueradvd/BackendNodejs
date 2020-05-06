const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.get("/", (req, res) => {
  res.header({
    "custom-header": "Our custom header",
  });
  response.success(req, res, "message list");
});

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((FullMessage) => {
      response.success(req, res, FullMessage, 201);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Invalid information: ",
        400,
        "Controller Error"
      );
    });
});

module.exports = router;
