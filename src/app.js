const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

app.use('/', routes)

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

module.exports = app