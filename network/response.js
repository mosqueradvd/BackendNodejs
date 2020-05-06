const chalk = require('chalk')

exports.success = (req, res, message, status) => {
  res.status(status || 200).send({
    error: "",
    body: message
  })
}

exports.error = (res, req, message, status, details) => {
  console.error(chalk.yellow(details))
  res.status(status || 500).send({
    error: message,
    body: ""
  })
}