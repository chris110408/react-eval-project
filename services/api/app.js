var express = require('express')
var app = express();

var allowCrossDomain = function(req, res, next) {//设置response头部的中间件
  res.header('Access-Control-Allow-Origin', 'http://localhost:8089');//8089是vue项目的端口，这里相对于白名单
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
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
app.listen('8000',function () {
  console.log('>listening on 8000')
});

module.exports = app;
