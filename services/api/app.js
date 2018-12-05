var express = require('express')
var app = express();

var allowCrossDomain = function(req, res, next) {
  console.log(req.headers.origin)
  if( req.headers.origin == 'http://localhost:3000' || req.headers.origin == 'http://localhost:8000' ){
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
  }
  next();
};
app.use(allowCrossDomain);

app.get("/api/events",function (req,res) {
  var data = require('./MockData/events');//要获取的json文件
  if (data) {
    res.json(data);
  } else {
    res.status(400).json({ errors: { global: 'request errors -- no events data' } });
  }
})

app.get("/api/repos",function (req,res) {
  var data = require('./MockData/repos');//要获取的json文件
  if (data) {
    res.json(data);
  } else {
    res.status(400).json({ errors: { global: 'request errors -- no repos data' } });
  }
})

app.get("/api/users",function (req,res) {
  var data = require('./MockData/user');//要获取的json文件
  if (data) {
    res.json(data);
  } else {
    res.status(400).json({ errors: { global: 'request errors -- no users data' } });
  }
})
app.listen('8080',function () {
  console.log('>listening on 8080')
});

module.exports = app;
