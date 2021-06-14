const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
  res.render("home");
});

app.listen(3000, function(req, res){
  console.log("Now listening on Port 3000");
})
