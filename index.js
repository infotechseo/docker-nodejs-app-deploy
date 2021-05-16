var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.listen(4001, function () {
  console.log('app listening on port 4001')
})