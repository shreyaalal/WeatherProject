const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
     res.sendFile(__dirname+"/index.html");
   });
app.post("/", function(req, res){
  const query = req.body.cityName
  const apiKey = "7a1d3219f26619663ee1b9a71d5a3fd9"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
  https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const des = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "https://openweathermap.org/img/wn/" +icon+"@2x.png"
      res.write("<p>The weather is currently "+des+"</p>")
      res.write("The temperature in "+query+" is "+ temp +" degrees Celsius");
      res.write("<p><img src="+imgURL+"></p>");
      res.send();
    })
  })
});
app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
