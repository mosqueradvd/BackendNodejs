const express = require("express");
const router = express.Router();
const multer = require('multer');
const controller = require("./controller");
const response = require("../../network/response");

const upload = multer({
  dest: 'uploads/'
});

router.get("/", (req, res) => {

  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages)
    .then(messagesList => {
      response.success(res, req, messagesList, 200)
    })
    .catch(error => {
      response.error(res, req, "Unexpected Error :{", 500, error)
    })
});

router.post("/", upload.single('file'), (req, res) => {
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

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(error => {
      response.error(req, res, 'Internal Error :/', 500, error)
    })
})

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
  .then(() => {
    response.success(req, res, `${req.params.id}`, 200)
  })
  .catch(error => {
    response.error(req, res, 'Internal Error', 500, error)
  })
})

module.exports = router;
