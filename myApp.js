require('dotenv').config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();

console.log("Hello World");

let dir = __dirname + '/public';
app.use("/public", express.static(dir));


app.use(function middleware(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const index = __dirname + '/views/index.html';
app.get("/", (req, res) => {
  res.sendFile(index);
});

app.get("/json", (req, res) =>{
    let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase"){
    message = message.toUpperCase();
    res.json({"message": message});
  }
  else {
    res.json({"message": message});
  }});

  app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
  }, 
  (req, res) => {
    res.json({"time": req.time});
  });

app.get("/:word/echo", (req, res) => {
  let word = req.params.word;
  res.json({echo: word});
});


app.get("/name", (req, res) => {
  let user = req.query.first + ' ' + req.query.last;
  res.json({
    name : user
  });
});

app.post("/name", (req, res) => {
  let user = req.body.first + " " + req.body.last;
  res.json({name: user});
});



























 module.exports = app;
