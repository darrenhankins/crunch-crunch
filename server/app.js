const express = require("express");
var cors = require('cors')
const app = express ();

app.use(cors());
app.listen(3000, function(){
  console.log("Listening");
})

const wars = [{
  name: "Desert Strike",
  battles_fought: "8",
  battles_won: "8"
}]

app.get('/', function(req, res, next){
  res.send(wars);
})

// "http://www.mrbreakfast.com/cereal/mascot_63.jpg"
