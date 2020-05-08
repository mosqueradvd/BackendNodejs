const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.post('/', (req, res) => {
  controller.addUser(req.body.name)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(error => {
      response.error(req, res, 'Internal Error', 500, error)
    })
});

module.exports = router;