let express = require('express');
let app = express();
console.log("Hello World");

const index = __dirname + '/views/index.html';

app.get("/", (req, res) => {
  res.sendFile(index);
});

let dir = __dirname + '/public';
app.use("/public", express.static(dir));

app.get("/json", (req, res) =>{
  res.json({"message": "Hello json"});
});


const port_no = 8080;

app.listen(port_no, () =>{
    console.log("running this app localy on the port number: 8080")
});
























 module.exports = app;
