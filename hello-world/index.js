var express=require("express");
var app=express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/hello', (req,res)=>{
  res.send("Hello World");
});

app.post('/takedata', (req,res)=>{
  var jsonObj = req.body;
  res.send(jsonObj);
});

app.listen(8080);
