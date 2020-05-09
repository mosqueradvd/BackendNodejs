const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.get('/', (req, res) => {
  controller.getAllUsers()
  .then(user => {
    response.success(req, res, user, 200)
  })
  .catch(error => {
    response.error(req, res, 'Internal Error', 500, error)
  })
})

router.post('/', (req, res) => {
  controller.addUser(req.body.chat, req.body.name, req.body.message)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(error => {
      response.error(req, res, 'Internal Error', 500, error)
    })
});

module.exports = router;