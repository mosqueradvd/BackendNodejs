const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.get('/:userId', (req, res) => {
  controller.listChats(req.params.userId)
  .then(user => {
    response.success(req, res, user, 200)
  })
  .catch(error => {
    response.error(req, res, 'Internal Error', 500, error)
  })
})

router.post('/', (req, res) => {
  controller.addChat(req.body.users)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(error => {
      response.error(req, res, 'Internal Error', 500, error)
    })
});

module.exports = router;